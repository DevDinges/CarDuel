param(
  [switch]$Check,
  [switch]$NextSlot
)

$ErrorActionPreference = 'Stop'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
if (-not $repoRoot) { $repoRoot = (Get-Location).Path }

Add-Type -Language CSharp -TypeDefinition @'
using System;
using System.Collections.Generic;
using System.Text;

public static class JsManifestParser {
    private static int SkipString(string s, int i, char quote) {
        i++;
        while (i < s.Length) {
            char c = s[i];
            if (c == '\\') { i += 2; continue; }
            if (c == quote) return i + 1;
            i++;
        }
        return i;
    }

    private static int SkipTemplate(string s, int i) {
        i++;
        while (i < s.Length) {
            char c = s[i];
            if (c == '\\') { i += 2; continue; }
            if (c == (char)96) return i + 1;
            if (c == '$' && i + 1 < s.Length && s[i + 1] == '{') {
                i = SkipBalanced(s, i + 1, '{', '}');
                continue;
            }
            i++;
        }
        return i;
    }

    private static int SkipWhitespaceAndComments(string s, int i) {
        while (i < s.Length) {
            char c = s[i];
            if (char.IsWhiteSpace(c)) { i++; continue; }
            if (c == '/' && i + 1 < s.Length && s[i + 1] == '/') {
                i += 2;
                while (i < s.Length && s[i] != '\n') i++;
                continue;
            }
            if (c == '/' && i + 1 < s.Length && s[i + 1] == '*') {
                i += 2;
                while (i + 1 < s.Length && !(s[i] == '*' && s[i + 1] == '/')) i++;
                i = Math.Min(s.Length, i + 2);
                continue;
            }
            break;
        }
        return i;
    }

    public static int SkipBalanced(string s, int i, char openCh, char closeCh) {
        int depth = 0;
        while (i < s.Length) {
            char c = s[i];
            if (c == '\'' || c == '"') { i = SkipString(s, i, c); continue; }
            if (c == (char)96) { i = SkipTemplate(s, i); continue; }
            if (c == '/' && i + 1 < s.Length && (s[i + 1] == '/' || s[i + 1] == '*')) {
                i = SkipWhitespaceAndComments(s, i);
                continue;
            }
            if (c == openCh) depth++;
            else if (c == closeCh) {
                depth--;
                if (depth == 0) return i + 1;
            }
            i++;
        }
        return i;
    }

    public static Dictionary<string, string> ParseObject(string objLiteral) {
        var dict = new Dictionary<string, string>(StringComparer.Ordinal);
        if (string.IsNullOrWhiteSpace(objLiteral)) return dict;
        int openBrace = objLiteral.IndexOf('{');
        if (openBrace < 0) return dict;
        int endBrace = SkipBalanced(objLiteral, openBrace, '{', '}');
        int i = openBrace + 1;
        while (i < endBrace - 1) {
            i = SkipWhitespaceAndComments(objLiteral, i);
            if (i >= endBrace - 1) break;
            if (objLiteral[i] == ',') { i++; continue; }
            string key;
            if (objLiteral[i] == '\'' || objLiteral[i] == '"') {
                char q = objLiteral[i];
                int next = SkipString(objLiteral, i, q);
                key = objLiteral.Substring(i + 1, next - i - 2);
                i = next;
            } else {
                int start = i;
                while (i < endBrace - 1 && (char.IsLetterOrDigit(objLiteral[i]) || objLiteral[i] == '_' || objLiteral[i] == '$')) i++;
                key = objLiteral.Substring(start, i - start);
            }
            i = SkipWhitespaceAndComments(objLiteral, i);
            if (i >= endBrace - 1 || objLiteral[i] != ':') { i++; continue; }
            i++;
            i = SkipWhitespaceAndComments(objLiteral, i);
            int valStart = i;
            if (objLiteral[i] == '{') {
                i = SkipBalanced(objLiteral, i, '{', '}');
            } else if (objLiteral[i] == '[') {
                i = SkipBalanced(objLiteral, i, '[', ']');
            } else if (objLiteral[i] == '\'' || objLiteral[i] == '"') {
                i = SkipString(objLiteral, i, objLiteral[i]);
            } else if (objLiteral[i] == (char)96) {
                i = SkipTemplate(objLiteral, i);
            } else {
                while (i < endBrace - 1 && objLiteral[i] != ',' && objLiteral[i] != '\n' && objLiteral[i] != '\r') {
                    if (objLiteral[i] == '/' && i + 1 < endBrace - 1 && (objLiteral[i + 1] == '/' || objLiteral[i + 1] == '*')) break;
                    i++;
                }
            }
            dict[key] = objLiteral.Substring(valStart, i - valStart).Trim();
        }
        return dict;
    }

    public static List<string> ParseArrayObjects(string arrayLiteral) {
        var list = new List<string>();
        if (string.IsNullOrWhiteSpace(arrayLiteral)) return list;
        int openBracket = arrayLiteral.IndexOf('[');
        if (openBracket < 0) return list;
        int endBracket = SkipBalanced(arrayLiteral, openBracket, '[', ']');
        int i = openBracket + 1;
        while (i < endBracket - 1) {
            i = SkipWhitespaceAndComments(arrayLiteral, i);
            if (i >= endBracket - 1) break;
            if (arrayLiteral[i] == ',') { i++; continue; }
            if (arrayLiteral[i] == '{') {
                int endObj = SkipBalanced(arrayLiteral, i, '{', '}');
                list.Add(arrayLiteral.Substring(i, endObj - i));
                i = endObj;
            } else {
                i++;
            }
        }
        return list;
    }

    public static Dictionary<string, string> ParseRegisterCall(string fileSource) {
        return ParseRegisterCallNamed(fileSource, "registerAutoDuelVehicle");
    }

    public static Dictionary<string, string> ParseRegisterCallNamed(string fileSource, string fnName) {
        int idx = fileSource.IndexOf(fnName, StringComparison.Ordinal);
        if (idx < 0) throw new Exception(fnName + "(...) call missing");
        int openBrace = fileSource.IndexOf('{', idx);
        if (openBrace < 0) throw new Exception("Payload object missing for " + fnName);
        int endBrace = SkipBalanced(fileSource, openBrace, '{', '}');
        return ParseObject(fileSource.Substring(openBrace, endBrace - openBrace));
    }
}
'@

$carsDir = Join-Path (Join-Path $repoRoot 'data') 'cars'
$enginesDir = Join-Path (Join-Path $repoRoot 'data') 'engines'
if (-not (Test-Path -LiteralPath $carsDir)) {
  throw "Missing directory: $carsDir"
}

# Shared engine library (data/engines/<ref>.js): engine-owned subStats override car-level copies
function Get-EngineLibSubStats([string]$ref) {
  $p = Join-Path $enginesDir "$ref.js"
  if (-not (Test-Path -LiteralPath $p)) { throw "Missing shared engine file: data/engines/$ref.js" }
  $src = [IO.File]::ReadAllText($p, [Text.Encoding]::UTF8)
  $top = [JsManifestParser]::ParseRegisterCallNamed($src, 'registerAutoDuelEngine')
  $def = [JsManifestParser]::ParseObject($top['definition'])
  $engs = [JsManifestParser]::ParseArrayObjects($def['engines'])
  $libEp = [JsManifestParser]::ParseObject($engs[0])
  return [JsManifestParser]::ParseObject($libEp['subStats'])
}

$carFiles = @(Get-ChildItem -LiteralPath $carsDir -Filter '*.js' -File | Where-Object { -not $_.Name.StartsWith('_') } | Sort-Object { $_.Name } -CaseSensitive)
if ($carFiles.Count -eq 0) {
  throw "No vehicle files found in $carsDir"
}

# Compute deterministic content hash for CAR_DATA_VERSION
$sha = [System.Security.Cryptography.SHA256]::Create()
$hashInputBuilder = New-Object System.Text.StringBuilder
$parsedCars = New-Object System.Collections.Generic.List[object]

foreach ($cf in $carFiles) {
  $raw = [IO.File]::ReadAllText($cf.FullName, [Text.Encoding]::UTF8)
  $rawNorm = $raw.Replace("`r`n", "`n")
  [void]$hashInputBuilder.Append($cf.Name).Append(':').Append($rawNorm.Length).Append(':')
  $top = [JsManifestParser]::ParseRegisterCall($raw)
  $rp = [JsManifestParser]::ParseObject($top['roster'])

  $idVal = $rp['id'].Trim("'", '"')
  $numStr = $rp['number'].Trim("'", '"')
  $numInt = [int]$numStr
  $gridInt = if ($rp.ContainsKey('gridOrder')) { [int]($rp['gridOrder'].Trim("'", '"')) } else { $numInt }

  $sgMap = if ($rp.ContainsKey('sharedGearboxes')) { [JsManifestParser]::ParseObject($rp['sharedGearboxes']) } else { @{} }
  $engArray = [JsManifestParser]::ParseArrayObjects($rp['engines'])
  $engineStubs = New-Object System.Collections.Generic.List[string]
  foreach ($engRaw in $engArray) {
    $ep = [JsManifestParser]::ParseObject($engRaw)
    $engLines = New-Object System.Collections.Generic.List[string]

    # Resolve default gearbox overrides (estUsedPrice + subStatDeltas) & collect gearboxSearch tokens
    $defGbId = if ($ep.ContainsKey('defaultGearboxId')) { $ep['defaultGearboxId'].Trim("'", '"') } else { '' }
    $defSharedGb = $null
    $defEngGb = $null
    $gbTokens = New-Object System.Collections.Generic.List[string]
    $gbSeen = New-Object 'System.Collections.Generic.HashSet[string]' ([System.StringComparer]::OrdinalIgnoreCase)
    if ($ep.ContainsKey('gearboxes')) {
      $gbList = [JsManifestParser]::ParseArrayObjects($ep['gearboxes'])
      foreach ($gbRaw in $gbList) {
        $gp = [JsManifestParser]::ParseObject($gbRaw)
        $gid = if ($gp.ContainsKey('id')) { $gp['id'].Trim("'", '"') } else { '' }
        $sgObj = if ($gid -and $sgMap.ContainsKey($gid)) { [JsManifestParser]::ParseObject($sgMap[$gid]) } else { @{} }
        $isDef = ($gp.ContainsKey('isDefault') -and $gp['isDefault'] -eq 'true') -or ($gid -and $gid -eq $defGbId)
        if ($isDef) {
          $defSharedGb = $sgObj
          $defEngGb = $gp
        }
        foreach ($srcObj in @($sgObj, $gp)) {
          if ($srcObj.ContainsKey('category')) {
            $tv = $srcObj['category'].Trim("'", '"')
            if ($tv -and $gbSeen.Add($tv)) { $gbTokens.Add($tv) }
          }
          if ($srcObj.ContainsKey('id')) {
            $tv = $srcObj['id'].Trim("'", '"')
            if ($tv -and $gbSeen.Add($tv)) { $gbTokens.Add($tv) }
          }
          foreach ($lk in @('label', 'shortLabel', 'subLabel')) {
            if ($srcObj.ContainsKey($lk)) {
              $lo = [JsManifestParser]::ParseObject($srcObj[$lk])
              if ($lo.ContainsKey('en')) {
                $tv = $lo['en'].Trim("'", '"')
                if ($tv -and $gbSeen.Add($tv)) { $gbTokens.Add($tv) }
              } elseif (-not $srcObj[$lk].StartsWith('{')) {
                $tv = $srcObj[$lk].Trim("'", '"')
                if ($tv -and $gbSeen.Add($tv)) { $gbTokens.Add($tv) }
              }
            }
          }
        }
      }
    }

    foreach ($ek in @('id', 'isDefault', 'fuelType', 'hp', 'drivetrain', 'fullName', 'engineBadge', 'engineSubLabel', 'msrpPrice', 'estUsedPrice')) {
      $val = if ($ep.ContainsKey($ek)) { $ep[$ek] } else { $null }
      if ($ek -eq 'estUsedPrice' -and $defEngGb -and $defEngGb.ContainsKey('estUsedPrice') -and -not [string]::IsNullOrWhiteSpace($defEngGb['estUsedPrice'])) {
        $val = $defEngGb['estUsedPrice']
      } elseif ($ek -eq 'estUsedPrice' -and $defSharedGb -and $defSharedGb.ContainsKey('estUsedPrice') -and -not [string]::IsNullOrWhiteSpace($defSharedGb['estUsedPrice'])) {
        $val = $defSharedGb['estUsedPrice']
      }
      if (-not [string]::IsNullOrWhiteSpace($val)) {
        $engLines.Add("        ${ek}: $val")
      }
    }
    if ($gbTokens.Count -gt 0) {
      $gbSearchStr = (($gbTokens -join ' ') -replace "'", '' -replace '\s+', ' ').Trim().ToLowerInvariant()
      $engLines.Add("        gearboxSearch: '$gbSearchStr'")
    }

    $subMap = [JsManifestParser]::ParseObject($ep['subStats'])
    if ($ep.ContainsKey('engineRef')) {
      $libSubMap = Get-EngineLibSubStats ($ep['engineRef'].Trim("'", '"'))
      foreach ($lk in @($libSubMap.Keys)) { $subMap[$lk] = $libSubMap[$lk] }
    }
    $sharedDeltas = if ($defSharedGb -and $defSharedGb.ContainsKey('subStatDeltas')) { [JsManifestParser]::ParseObject($defSharedGb['subStatDeltas']) } else { @{} }
    $engDeltas = if ($defEngGb -and $defEngGb.ContainsKey('subStatDeltas')) { [JsManifestParser]::ParseObject($defEngGb['subStatDeltas']) } else { @{} }
    $subPairs = New-Object System.Collections.Generic.List[string]
    foreach ($sk in $subMap.Keys) {
      $sObj = [JsManifestParser]::ParseObject($subMap[$sk])
      $scoreVal = if ($sObj.ContainsKey('score')) { $sObj['score'] } else { $null }
      if ($sharedDeltas.ContainsKey($sk)) {
        $dObj = [JsManifestParser]::ParseObject($sharedDeltas[$sk])
        if ($dObj.ContainsKey('score')) { $scoreVal = $dObj['score'] }
      }
      if ($engDeltas.ContainsKey($sk)) {
        $dObj = [JsManifestParser]::ParseObject($engDeltas[$sk])
        if ($dObj.ContainsKey('score')) { $scoreVal = $dObj['score'] }
      }
      if ($scoreVal) {
        $subPairs.Add("${sk}: { score: $scoreVal }")
      }
    }
    $engLines.Add("        subStats: { $($subPairs -join ', ') }")
    $engineStubs.Add("      {`r`n$($engLines -join ",`r`n")`r`n      }")
  }

  $carLines = New-Object System.Collections.Generic.List[string]
  foreach ($rk in @('id', 'number', 'carType', 'gridOrder', 'gridLabel', 'yearMake', 'shortTitle', 'fullName', 'drivetrain', 'image', 'imageFacing', 'defaultEngineId')) {
    if ($rp.ContainsKey($rk) -and -not [string]::IsNullOrWhiteSpace($rp[$rk])) {
      $carLines.Add("    ${rk}: $($rp[$rk])")
    }
  }
  $carLines.Add("    _hydrated: false")
  $carLines.Add("    engines: [`r`n$($engineStubs -join ",`r`n")`r`n    ]")

  $parsedCars.Add([pscustomobject]@{
    Id = $idVal
    Num = $numInt
    GridOrder = $gridInt
    Stub = "  {`r`n$($carLines -join ",`r`n")`r`n  }"
    Angles = $top['angles']
    MirroredAngles = if ($top.ContainsKey('mirroredAngles')) { $top['mirroredAngles'] } else { 'null' }
    EngineDates = if ($top.ContainsKey('engineDates')) { [JsManifestParser]::ParseObject($top['engineDates']) } else { $null }
  })
}

if ($NextSlot) {
  [int]$maxNum = ($parsedCars | Measure-Object -Property Num -Maximum).Maximum
  [int]$maxGrid = ($parsedCars | Measure-Object -Property GridOrder -Maximum).Maximum
  $nextNum = '{0:D2}' -f ($maxNum + 1)
  $nextGrid = $maxGrid + 1
  Write-Host ("NEXT_SLOT: number='{0}' | gridOrder={1} | currentRoster={2}" -f $nextNum, $nextGrid, $parsedCars.Count) -ForegroundColor Cyan
  exit 0
}

# Deterministic SHA-256 across line-ending-normalized file bytes
$allBytesStream = New-Object System.IO.MemoryStream
foreach ($cf in $carFiles) {
  $normCarText = [IO.File]::ReadAllText($cf.FullName, [Text.Encoding]::UTF8).Replace("`r`n", "`n")
  $b = $utf8NoBom.GetBytes($normCarText)
  $allBytesStream.Write($b, 0, $b.Length)
}
if (Test-Path -LiteralPath $enginesDir) {
  $engineFiles = @(Get-ChildItem -LiteralPath $enginesDir -Filter '*.js' -File | Sort-Object { $_.Name } -CaseSensitive)
  foreach ($ef in $engineFiles) {
    $normEngText = [IO.File]::ReadAllText($ef.FullName, [Text.Encoding]::UTF8).Replace("`r`n", "`n")
    $eb = $utf8NoBom.GetBytes($normEngText)
    $allBytesStream.Write($eb, 0, $eb.Length)
  }
}
$hashBytes = $sha.ComputeHash($allBytesStream.ToArray())
$versionHash = -join ($hashBytes[0..5] | ForEach-Object { $_.ToString('x2') })

$sortedCars = @($parsedCars | Sort-Object Num, Id)

$rosterOut = ($sortedCars | ForEach-Object { $_.Stub }) -join ",`r`n"
$anglesOut = ($sortedCars | ForEach-Object { "  '$($_.Id)': $($_.Angles)" }) -join ",`r`n"
$mirroredList = @($sortedCars | Where-Object { $_.MirroredAngles -ne 'null' -and -not [string]::IsNullOrWhiteSpace($_.MirroredAngles) } | ForEach-Object { "  '$($_.Id)': $($_.MirroredAngles)" })
$mirroredOut = $mirroredList -join ",`r`n"

$dateEntries = New-Object System.Collections.Generic.List[string]
foreach ($sc in $sortedCars) {
  if ($sc.EngineDates) {
    foreach ($ek in $sc.EngineDates.Keys) {
      $dateEntries.Add("  '$($sc.Id):${ek}': $($sc.EngineDates[$ek])")
    }
  }
}
$datesOut = $dateEntries -join ",`r`n"

$manifestText = @"
// ============================================================================
// AUTO DUEL -- Auto-Generated Lightweight Catalog Manifest
// Generated by scripts/build-manifest.ps1 from data/cars/*.js -- DO NOT HAND-EDIT
// ============================================================================

const CAR_DATA_VERSION = '$versionHash';

const LEGACY_CAR_ID_MAP = {
  'toyota-auris-2014': 'toyota-auris-e180',
  'honda-civic-2014': 'honda-civic-fk',
  'honda-crv-2010': 'honda-crv-re',
  'peugeot-308-gti-2019': 'peugeot-308-gti-t9',
  'ford-mondeo-2012': 'ford-mondeo-ba7',
  'honda-civic-type-r-2015': 'honda-civic-type-r-fk2',
  'honda-accord-2011': 'honda-accord-cu',
  'honda-jazz-2011': 'honda-jazz-ge',
  'mercedes-c-class-2011': 'mercedes-c-class-w204',
  'toyota-rav4-2010': 'toyota-rav4-xa30',
  'kia-sportage-2014': 'kia-sportage-sl',
  'mazda-6-2010': 'mazda-6-gh',
  'toyota-avensis-2012': 'toyota-avensis-t27',
  'audi-a3-8p-2010': 'audi-a3-8p',
  'audi-a3-8v-2016': 'audi-a3-8v'
};

const CAR_ROSTER = [
$rosterOut
];

const CAR_AVAILABLE_ANGLES = {
$anglesOut
};

const CAR_MIRRORED_ANGLES = {
$mirroredOut
};

const ENGINE_DATE_FALLBACKS = {
$datesOut
};

// Populated on demand as individual data/cars/<id>.js files hydrate
const CAR_FACTORY_PAINTS = {};
const CAR_INDEPTH_DATA = {};
"@

$manifestText = $manifestText.Replace("`r`n", "`n").Replace("`n", "`r`n")
$manifestPath = Join-Path (Join-Path $repoRoot 'data') 'manifest.js'

if ($Check) {
  if (-not (Test-Path -LiteralPath $manifestPath)) {
    Write-Host "FAIL: data/manifest.js missing (run scripts/build-manifest.ps1)" -ForegroundColor Red
    exit 1
  }
  $existingNorm = [IO.File]::ReadAllText($manifestPath, [Text.Encoding]::UTF8).Replace("`r`n", "`n")
  $expectedNorm = $manifestText.Replace("`r`n", "`n")
  if ($existingNorm -ne $expectedNorm) {
    Write-Host "FAIL: data/manifest.js is stale (run scripts/build-manifest.ps1)" -ForegroundColor Red
    $exLines = $existingNorm -split "`n"
    $epLines = $expectedNorm -split "`n"
    $maxL = [Math]::Min($exLines.Length, $epLines.Length)
    for ($li = 0; $li -lt $maxL; $li++) {
      if ($exLines[$li] -ne $epLines[$li]) {
        Write-Host ("  First diff at line {0}:" -f ($li + 1)) -ForegroundColor Yellow
        Write-Host ("    existing: {0}" -f $exLines[$li]) -ForegroundColor Yellow
        Write-Host ("    expected: {0}" -f $epLines[$li]) -ForegroundColor Yellow
        break
      }
    }
    exit 1
  }
  Write-Host "PASS: data/manifest.js is up to date ($($sortedCars.Count) cars, version $versionHash)" -ForegroundColor Green
  exit 0
}

[IO.File]::WriteAllText($manifestPath, $manifestText, $utf8NoBom)
$sizeKb = [math]::Round(($manifestText.Length / 1024), 1)
Write-Host "Generated data/manifest.js ($($sortedCars.Count) cars, ${sizeKb} KB, version $versionHash)" -ForegroundColor Cyan
