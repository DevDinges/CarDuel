param(
  [switch]$Apply,
  [switch]$Check
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
Push-Location -LiteralPath $repoRoot

try {
  if (-not $Apply -and -not $Check) { $Check = $true }

  function Clamp-Score([double]$val, [double]$min, [double]$max) {
    if ($val -lt $min) { return $min }
    if ($val -gt $max) { return $max }
    return [math]::Round($val, 1)
  }

  function Parse-Num([string]$s, [string]$pattern) {
    if ([string]::IsNullOrWhiteSpace($s)) { return $null }
    $m = [regex]::Match($s, $pattern)
    if (-not $m.Success) { return $null }
    $rawNum = $m.Groups[1].Value
    if ($rawNum -match '^\d{1,3}(?:,\d{3})+(?:\.\d+)?$') {
      $rawNum = $rawNum -replace ',', ''
    } else {
      $rawNum = $rawNum -replace ',', '.'
    }
    return [double]$rawNum
  }

  function Parse-Euro([string]$s) {
    if ([string]::IsNullOrWhiteSpace($s)) { return $null }
    $clean = $s -replace '[^\d]', ''
    if ($clean.Length -eq 0) { return $null }
    return [double]$clean
  }

  $carFiles = @(Get-ChildItem -LiteralPath './data/cars' -Filter '*.js' -File | Where-Object { -not $_.Name.StartsWith('_') } | Sort-Object Name)
  # Shared engine library files use the same engines[] layout, so engine-owned scores calibrate there too
  if (Test-Path -LiteralPath './data/engines') {
    $carFiles += @(Get-ChildItem -LiteralPath './data/engines' -Filter '*.js' -File | Sort-Object Name)
  }
  $drifts = New-Object System.Collections.Generic.List[string]
  $updatedCount = 0
  $checkedEngines = 0

  foreach ($cf in $carFiles) {
    $raw = [IO.File]::ReadAllText($cf.FullName, [Text.Encoding]::UTF8)
    $carId = [IO.Path]::GetFileNameWithoutExtension($cf.Name)

    # Extract sharedSpecs block
    $sharedSpecs = @{}
    $ssM = [regex]::Match($raw, 'sharedSpecs:\s*\{([\s\S]*?)\r?\n\s{4}\},')
    if ($ssM.Success) {
      foreach ($km in [regex]::Matches($ssM.Groups[1].Value, "(\w+):\s*'([^']*)'")) {
        $sharedSpecs[$km.Groups[1].Value] = $km.Groups[2].Value
      }
    }

    # Find engines array
    $engBlockM = [regex]::Match($raw, 'engines:\s*\[([\s\S]*?)\r?\n\s{4}\]')
    if (-not $engBlockM.Success) { continue }

    $lines = $raw -split "\r?\n"
    $inEngines = $false
    $curEngId = $null
    $curFuelType = 'petrol'
    $curMsrp = $null
    $curUsed = $null
    $curSpecs = @{}
    $curGbId = $null
    $inGearboxes = $false
    $curGbOverrides = @{}

    # We'll collect line edits as @{ LineIdx = i; NewScore = x }
    $lineEdits = @{}

    $computeScores = {
      param($specs, $fuelType, $msrpStr, $usedStr)
      $res = @{}

      $sprint = Parse-Num $specs['sprint0100'] '(\d+(?:[.,]\d+)?)\s*s'
      $vmax = Parse-Num $specs['topSpeed'] '(\d+(?:[.,]\d+)?)\s*km/h'
      if ($null -ne $sprint -and $null -ne $vmax) {
        $sScore = Clamp-Score (10.0 - ($sprint - 5.2) * 0.82) 2.0 10.0
        $vScore = Clamp-Score (5.0 + ($vmax - 175.0) * 0.055) 3.0 10.0
        $res['accelerationOvertaking'] = [math]::Round((0.78 * $sScore + 0.22 * $vScore), 1)
      }

      $nm = Parse-Num $specs['peakTorque'] '(\d+(?:[.,]\d+)?)\s*Nm'
      if ($null -ne $nm) {
        $rpmM = [regex]::Match([string]$specs['peakTorque'], '@\s*([\d,.\-]+)')
        $rpm = 3500
        if ($rpmM.Success) {
          $rClean = ($rpmM.Groups[1].Value -replace '[^0-9\-]', '').Split('-')[0]
          if ($rClean -match '^\d+$') { $rpm = [int]$rClean }
        }
        $rpmBonus = if ($fuelType -eq 'hybrid') { 0.9 } elseif ($rpm -le 2000) { 0.6 } elseif ($rpm -le 3000) { 0.3 } elseif ($rpm -le 4000) { 0.0 } else { -0.2 }
        $res['midRangeTorquePassing'] = Clamp-Score (4.0 + ($nm - 120.0) * 0.0165 + $rpmBonus) 2.5 9.9
      }

      $brk = Parse-Num $specs['braking1000'] '(\d+(?:[.,]\d+)?)\s*m'
      if ($null -ne $brk) {
        $bSetup = [string]$specs['brakeSetup']
        $bBonus = if ($bSetup -eq '@discsPerf') { 0.4 } elseif ($bSetup -eq '@discsRegen') { 0.1 } else { 0.0 }
        $res['brakingPerformance'] = Clamp-Score (10.0 - ($brk - 32.5) * 0.65 + $bBonus) 3.5 9.9
      }

      $fuelStr = [string]$specs['realWorldFuel']
      $parseFuelLiters = {
        param([string]$s)
        if ($s -match '(\d+(?:[.,]\d+)?)\s*[–-]\s*(\d+(?:[.,]\d+)?)\s*L') {
          $low = [double]($Matches[1] -replace ',', '.')
          $high = [double]($Matches[2] -replace ',', '.')
          return (($low + $high) / 2.0)
        }
        return (Parse-Num $s '(\d+(?:[.,]\d+)?)\s*L')
      }
      if ($fuelStr -match 'kg\s*CNG') {
        $kg = Parse-Num $fuelStr '(\d+(?:[.,]\d+)?)\s*kg'
        if ($null -ne $kg) { $res['efficiencyFuel'] = Clamp-Score (13.2 - $kg * 0.95) 7.0 9.6 }
      } elseif ($fuelStr -match 'kWh') {
        $lit = & $parseFuelLiters $fuelStr
        if ($null -ne $lit) { $res['efficiencyFuel'] = Clamp-Score (12.2 - $lit * 0.65) 7.5 9.6 }
      } else {
        $lit = & $parseFuelLiters $fuelStr
        if ($null -ne $lit) { $res['efficiencyFuel'] = Clamp-Score (13.6 - $lit * 1.0) 2.5 9.8 }
      }

      $bootStr = [string]$specs['bootVolume']
      $bm = [regex]::Match($bootStr, '(\d[\d,]*)\s*L\s*/\s*(\d[\d,]*)\s*L')
      if ($bm.Success) {
        $upL = [double]($bm.Groups[1].Value -replace ',', '')
        $dnL = [double]($bm.Groups[2].Value -replace ',', '')
        $uScore = Clamp-Score (4.2 + ($upL - 200.0) * 0.013) 3.5 9.8
        $dScore = Clamp-Score (4.2 + ($dnL - 800.0) * 0.0052) 3.5 9.8
        $res['interiorBootSpace'] = [math]::Round((0.65 * $uScore + 0.35 * $dScore), 1)
      }

      $payStr = [string]$specs['payloadRoof']
      $towStr = [string]$specs['towingBraked']
      $kgMatches = [regex]::Matches($payStr, '(\d+(?:,\d{3})*)\s*kg')
      $payKg = if ($kgMatches.Count -ge 1) { [double]($kgMatches[0].Groups[1].Value -replace ',', '') } else { $null }
      $roofKg = if ($kgMatches.Count -ge 2) { [double]($kgMatches[1].Groups[1].Value -replace ',', '') } else { 0.0 }
      $towKg = if ($towStr -match '(?<!\d)0\s*kg') { 0.0 } else { Parse-Num $towStr '([\d,]+)\s*kg' }
      if ($null -ne $payKg -and $null -ne $towKg) {
        $pScore = Clamp-Score (2.5 + ($payKg - 300.0) * 0.021) 2.0 9.8
        $tScore = if ($towKg -le 0) { 1.0 } else { Clamp-Score (2.2 + ($towKg / 2000.0) * 7.6) 2.5 9.8 }
        $rScore = if ($roofKg -le 0) { 1.0 } else { Clamp-Score (2.0 + ($roofKg / 100.0) * 7.8) 2.0 9.8 }
        $res['payloadTowing'] = Clamp-Score (0.55 * $tScore + 0.35 * $pScore + 0.10 * $rScore) 2.0 9.8
      }

      $retTok = [string]$specs['valueRetention']
      $demTok = [string]$specs['resaleDemand']
      $retBase = switch ($retTok) {
        '@retVeryHigh' { 9.0 }
        '@retHigh' { 8.2 }
        '@retMod' { 7.0 }
        '@retModLow' { 5.6 }
        default { $null }
      }
      if ($null -ne $retBase) {
        $demDelta = switch ($demTok) {
          '@demFast' { 0.4 }
          '@demNiche' { -0.3 }
          default { 0.0 }
        }
        $msrpVal = Parse-Euro $msrpStr
        $usedVal = Parse-Euro $usedStr
        $retAdj = 0.0
        if ($msrpVal -and $msrpVal -gt 0 -and $usedVal) {
          $retPct = ($usedVal / $msrpVal) * 100.0
          $retAdj = Clamp-Score (($retPct - 42.0) * 0.04) -0.6 0.6
        }
        $res['depreciationResale'] = Clamp-Score ($retBase + $demDelta + $retAdj) 4.0 9.6
      }

      return $res
    }

    # Parse engines linearly from $lines
    $braceDepth = 0
    $engStartDepth = -1
    $inSpecOverrides = $false
    $inSubStats = $false
    $inGbDelta = $false
    $engRecord = $null
    $records = New-Object System.Collections.Generic.List[object]

    for ($i = 0; $i -lt $lines.Length; $i++) {
      $ln = $lines[$i]
      if (-not $inEngines) {
        if ($ln -match '^\s{4}engines:\s*\[') { $inEngines = $true; $braceDepth = 0 }
        continue
      }
      if ($ln -match '^\s{4}\],?\s*$') { break }

      $opens = ([regex]::Matches($ln, '\{')).Count
      $closes = ([regex]::Matches($ln, '\}')).Count

      if ($null -eq $engRecord -and $ln -match '^\s{6}\{\s*$') {
        $engRecord = [pscustomobject]@{
          Id = ''
          Fuel = 'petrol'
          Msrp = ''
          Used = ''
          Specs = @{}
          ScoreLines = @{}
          GbDeltas = New-Object System.Collections.Generic.List[object]
        }
        foreach ($k in $sharedSpecs.Keys) { $engRecord.Specs[$k] = $sharedSpecs[$k] }
        $engStartDepth = $braceDepth
      }

      $braceDepth += ($opens - $closes)

      if ($null -ne $engRecord) {
        if ($ln -match "^\s{8}id:\s*'([^']+)'") { $engRecord.Id = $Matches[1] }
        if ($ln -match "^\s{8}fuelType:\s*'([^']+)'") { $engRecord.Fuel = $Matches[1] }
        if ($ln -match "^\s{8}estUsedPrice:\s*'([^']+)'") { $engRecord.Used = $Matches[1] }
        if ($ln -match "^\s{8}originalMsrp:.*en:\s*'([^']+)'") { $engRecord.Msrp = $Matches[1] }

        if ($ln -match '^\s{8}specOverrides:\s*\{') {
          foreach ($km in [regex]::Matches($ln, "(\w+):\s*'([^']*)'")) {
            $engRecord.Specs[$km.Groups[1].Value] = $km.Groups[2].Value
          }
          if ($ln -notmatch '\}\s*,?\s*$') { $inSpecOverrides = $true }
        } elseif ($inSpecOverrides) {
          foreach ($km in [regex]::Matches($ln, "(\w+):\s*'([^']*)'")) {
            $engRecord.Specs[$km.Groups[1].Value] = $km.Groups[2].Value
          }
          if ($ln -match '^\s{8}\}') { $inSpecOverrides = $false }
        }

        if ($ln -match '^\s{8}subStats:\s*\{') { $inSubStats = $true }
        elseif ($inSubStats) {
          if ($ln -match '^\s{8}\}') { $inSubStats = $false }
          foreach ($sk in @('accelerationOvertaking','midRangeTorquePassing','brakingPerformance','efficiencyFuel','interiorBootSpace','payloadTowing','depreciationResale')) {
            if ($ln -match "^\s{10}${sk}:\s*\{\s*score:\s*(\d+(?:\.\d+)?)" -or ($ln -match "^\s{10}${sk}:\s*\{\s*$" -and $lines[$i+1] -match "score:\s*(\d+(?:\.\d+)?)")) {
              $targetIdx = if ($ln -match 'score:') { $i } else { $i + 1 }
              $mSc = [regex]::Match($lines[$targetIdx], 'score:\s*(\d+(?:\.\d+)?)')
              if ($mSc.Success) {
                $engRecord.ScoreLines[$sk] = [pscustomobject]@{ LineIdx = $targetIdx; Current = [double]$mSc.Groups[1].Value }
              }
            }
          }
        }

        if ($braceDepth -eq $engStartDepth -and $closes -gt 0) {
          $records.Add($engRecord)
          $engRecord = $null
        }
      }
    }

    $fileChanged = $false
    foreach ($rec in $records) {
      $checkedEngines++
      $computed = & $computeScores $rec.Specs $rec.Fuel $rec.Msrp $rec.Used
      foreach ($sk in $computed.Keys) {
        if (-not $rec.ScoreLines.ContainsKey($sk)) { continue }
        $sl = $rec.ScoreLines[$sk]
        $targetVal = [double]$computed[$sk]
        $diff = [math]::Abs($sl.Current - $targetVal)
        if ($Apply -and $diff -ge 0.05) {
          $oldLine = $lines[$sl.LineIdx]
          $newStr = $targetVal.ToString('0.0', [Globalization.CultureInfo]::InvariantCulture)
          $newLine = [regex]::Replace($oldLine, 'score:\s*\d+(?:\.\d+)?', "score: $newStr", 1)
          if ($newLine -ne $oldLine) {
            $lines[$sl.LineIdx] = $newLine
            $fileChanged = $true
          }
        } elseif ($Check -and $diff -gt 0.21) {
          $drifts.Add("${carId}/$($rec.Id).${sk}: current=$($sl.Current) vs formula=$targetVal")
        }
      }
    }

    if ($Apply -and $fileChanged) {
      [IO.File]::WriteAllText($cf.FullName, ($lines -join "`r`n"), (New-Object Text.UTF8Encoding($false)))
      $updatedCount++
    }
  }

  if ($Apply) {
    Write-Host "CALIBRATE: Updated $updatedCount car file(s) across $checkedEngines engines."
  } else {
    if ($drifts.Count -gt 0) {
      Write-Host "FAIL: $($drifts.Count) objective score drift(s) > 0.2 detected:"
      $drifts | Select-Object -First 25 | ForEach-Object { Write-Host "  $_" }
      exit 1
    } else {
      Write-Host "PASS: All $checkedEngines engines match objective metric calibration (tolerance <= 0.2)"
    }
  }
} finally {
  Pop-Location
}
