param(
  [string]$CarId = '',
  [switch]$All,
  [switch]$Force,
  [double]$AngleQuality = 0.88,
  [double]$ThumbQuality = 0.82,
  [int]$ThumbWidth = 600
)

$ErrorActionPreference = 'Stop'

if (-not $All -and [string]::IsNullOrWhiteSpace($CarId)) {
  throw "Usage: ./scripts/process-assets.ps1 -All [-Force]  OR  ./scripts/process-assets.ps1 -CarId <brand>-<model>-<chassis> [-Force]"
}

$repoRoot = Split-Path -Parent $PSScriptRoot
Push-Location -LiteralPath $repoRoot
try {
  $assetsDir = Join-Path $repoRoot 'assets'
  $rawDir = Join-Path $assetsDir 'raw'
  $thumbsDir = Join-Path $assetsDir 'thumbs'
  $backupPngDir = Join-Path $repoRoot 'backups\assets-png'
  New-Item -ItemType Directory -Force -Path $assetsDir, $thumbsDir | Out-Null

  # Resolve car IDs
  $targetIds = New-Object System.Collections.Generic.List[string]
  if ($All) {
    $carFiles = @(Get-ChildItem -LiteralPath (Join-Path $repoRoot 'data\cars') -Filter '*.js' -File | Where-Object { -not $_.Name.StartsWith('_') } | Sort-Object Name)
    foreach ($cf in $carFiles) {
      $targetIds.Add([IO.Path]::GetFileNameWithoutExtension($cf.Name))
    }
  } else {
    $cleanId = $CarId.Trim().ToLowerInvariant()
    if ($cleanId -notmatch '^[a-z0-9-]+$') {
      throw "Invalid -CarId '$CarId'. Expected lowercase <brand>-<model>-<chassis> slug."
    }
    $targetIds.Add($cleanId)
  }

  function Find-AngleSource([string]$id, [string]$suf, [bool]$allowDestWebp) {
    $candidates = @(
      (Join-Path $rawDir "$id$suf.png"),
      (Join-Path $rawDir "$id$suf.jpg"),
      (Join-Path $rawDir "$id$suf.jpeg"),
      (Join-Path $rawDir "$id$suf.webp"),
      (Join-Path $assetsDir "$id$suf.png"),
      (Join-Path $assetsDir "$id$suf.jpg"),
      (Join-Path $assetsDir "$id$suf.jpeg"),
      (Join-Path $backupPngDir "$id$suf.png")
    )
    if ($allowDestWebp) {
      $candidates += (Join-Path $assetsDir "$id$suf.webp")
    }
    foreach ($c in $candidates) {
      if (Test-Path -LiteralPath $c -PathType Leaf) { return $c }
    }
    return $null
  }

  function Test-WebpMagic([string]$filePath) {
    if (-not (Test-Path -LiteralPath $filePath -PathType Leaf)) { return $false }
    $bytes = [IO.File]::ReadAllBytes($filePath)
    if ($bytes.Length -le 100) { return $false }
    $riff = [Text.Encoding]::ASCII.GetString($bytes, 0, 4)
    $webp = [Text.Encoding]::ASCII.GetString($bytes, 8, 4)
    return ($riff -eq 'RIFF' -and $webp -eq 'WEBP')
  }

  $suffixes = @('', '-front', '-side', '-side-rear', '-rear')
  $jobs = New-Object System.Collections.Generic.List[object]

  foreach ($cid in $targetIds) {
    foreach ($suf in $suffixes) {
      $destAngle = Join-Path $assetsDir "$cid$suf.webp"
      $needAngle = $Force -or -not (Test-WebpMagic $destAngle)
      $src = Find-AngleSource $cid $suf ($Force.IsPresent)

      if ($needAngle) {
        if (-not $src) {
          throw "Missing source image for '$cid$suf' (checked assets/raw/, assets/*.{png,jpg,jpeg}, backups/assets-png/)"
        }
        $jobs.Add([pscustomobject]@{
          Src = $src
          Dest = $destAngle
          Quality = $AngleQuality
          TargetWidth = 0
          Kind = 'angle'
        })
      }

      if ($suf -eq '') {
        $destThumb = Join-Path $thumbsDir "$cid.webp"
        $needThumb = $Force -or -not (Test-WebpMagic $destThumb)
        if ($needThumb) {
          $thumbSrc = if ($src) { $src } elseif (Test-WebpMagic $destAngle) { $destAngle } else { $null }
          if (-not $thumbSrc) {
            throw "Missing source image to generate thumbnail for '$cid'"
          }
          $jobs.Add([pscustomobject]@{
            Src = $thumbSrc
            Dest = $destThumb
            Quality = $ThumbQuality
            TargetWidth = $ThumbWidth
            Kind = 'thumb'
          })
        }
      }
    }
  }

  if ($jobs.Count -eq 0) {
    Write-Host ("All WebP assets for {0} car(s) are already up to date (use -Force to re-encode)." -f $targetIds.Count) -ForegroundColor Green
    exit 0
  }

  Write-Host ("Queued {0} WebP encoding job(s) across {1} car(s)..." -f $jobs.Count, $targetIds.Count) -ForegroundColor Cyan

  $cwebpCmd = Get-Command cwebp -ErrorAction SilentlyContinue
  if ($cwebpCmd) {
    foreach ($j in $jobs) {
      $qInt = [int][math]::Round($j.Quality * 100)
      $cargs = @('-quiet', '-q', "$qInt")
      if ($j.TargetWidth -gt 0) {
        $cargs += @('-resize', "$($j.TargetWidth)", '0')
      }
      $cargs += @($j.Src, '-o', $j.Dest)
      & $cwebpCmd.Source @cargs
      if ($LASTEXITCODE -ne 0 -or -not (Test-WebpMagic $j.Dest)) {
        throw "cwebp failed encoding $($j.Src) -> $($j.Dest)"
      }
    }
  } else {
    $browserExe = @(
      (Join-Path $env:ProgramFiles 'Google\Chrome\Application\chrome.exe'),
      (Join-Path ${env:ProgramFiles(x86)} 'Google\Chrome\Application\chrome.exe'),
      (Join-Path ${env:ProgramFiles(x86)} 'Microsoft\Edge\Application\msedge.exe'),
      (Join-Path $env:ProgramFiles 'Microsoft\Edge\Application\msedge.exe')
    ) | Where-Object { $_ -and (Test-Path -LiteralPath $_ -PathType Leaf) } | Select-Object -First 1

    if (-not $browserExe) {
      throw "No WebP encoder found (checked cwebp on PATH, Chrome, and Microsoft Edge)."
    }

    # Allocate ephemeral loopback port
    $tcp = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, 0)
    $tcp.Start()
    $port = ([System.Net.IPEndPoint]$tcp.LocalEndpoint).Port
    $tcp.Stop()

    $prefix = "http://127.0.0.1:$port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $tempProfile = Join-Path ([IO.Path]::GetTempPath()) ("autoduel-webp-" + [Guid]::NewGuid().ToString('N').Substring(0, 8))
    New-Item -ItemType Directory -Force -Path $tempProfile | Out-Null
    $proc = $null

    try {
      $listener.Start()

      $jobDtos = @()
      for ($idx = 0; $idx -lt $jobs.Count; $idx++) {
        $jobDtos += [ordered]@{
          idx = $idx
          quality = $jobs[$idx].Quality
          targetWidth = $jobs[$idx].TargetWidth
        }
      }
      $jobsJson = ConvertTo-Json -InputObject @($jobDtos) -Compress
      if ($jobs.Count -eq 1 -and -not $jobsJson.StartsWith('[')) {
        $jobsJson = "[$jobsJson]"
      }

      $workerHtml = @'
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head><body>
<script>
(async () => {
  try {
    const jobs = await (await fetch('/jobs')).json();
    for (const job of jobs) {
      const srcRes = await fetch('/src?idx=' + job.idx);
      if (!srcRes.ok) throw new Error('src fetch failed for idx ' + job.idx + ': ' + srcRes.status);
      const srcBlob = await srcRes.blob();
      const bmp = await createImageBitmap(srcBlob);
      const outW = job.targetWidth > 0 ? job.targetWidth : bmp.width;
      const outH = job.targetWidth > 0 ? Math.max(1, Math.round(bmp.height * (job.targetWidth / bmp.width))) : bmp.height;
      const canvas = document.createElement('canvas');
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(bmp, 0, 0, outW, outH);
      bmp.close();
      const outBlob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', job.quality));
      if (!outBlob) throw new Error('canvas.toBlob returned null for idx ' + job.idx);
      const saveRes = await fetch('/save?idx=' + job.idx + '&w=' + outW + '&h=' + outH, {
        method: 'POST',
        headers: { 'Content-Type': 'image/webp' },
        body: outBlob
      });
      if (!saveRes.ok) throw new Error('save failed for idx ' + job.idx + ': ' + saveRes.status);
    }
    await fetch('/done', { method: 'POST', body: 'ok' });
  } catch (err) {
    await fetch('/error', { method: 'POST', body: String(err && err.stack ? err.stack : err) });
  }
})();
</script></body></html>
'@

      $psi = New-Object System.Diagnostics.ProcessStartInfo
      $psi.FileName = $browserExe
      $psi.Arguments = "--headless=new --disable-gpu --no-first-run --no-default-browser-check --disable-extensions --user-data-dir=`"$tempProfile`" `"$($prefix)worker`""
      $psi.UseShellExecute = $false
      $psi.CreateNoWindow = $true
      $psi.RedirectStandardOutput = $true
      $psi.RedirectStandardError = $true
      $proc = [System.Diagnostics.Process]::Start($psi)

      $done = $false
      $mimeMap = @{ '.png' = 'image/png'; '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.webp' = 'image/webp' }
      while (-not $done) {
        $async = $listener.BeginGetContext($null, $null)
        if (-not $async.AsyncWaitHandle.WaitOne(45000)) {
          $errOut = if ($proc -and $proc.HasExited) { $proc.StandardError.ReadToEnd() } else { '' }
          throw "Timed out waiting for headless browser WebP worker ($browserExe). $errOut"
        }
        $ctx = $listener.EndGetContext($async)
        $req = $ctx.Request
        $res = $ctx.Response
        try {
          $path = $req.Url.AbsolutePath
          if ($path -eq '/worker') {
            $b = [Text.Encoding]::UTF8.GetBytes($workerHtml)
            $res.ContentType = 'text/html; charset=utf-8'
            $res.ContentLength64 = $b.Length
            $res.OutputStream.Write($b, 0, $b.Length)
          } elseif ($path -eq '/jobs') {
            $b = [Text.Encoding]::UTF8.GetBytes($jobsJson)
            $res.ContentType = 'application/json; charset=utf-8'
            $res.ContentLength64 = $b.Length
            $res.OutputStream.Write($b, 0, $b.Length)
          } elseif ($path -eq '/src') {
            [int]$idx = $req.QueryString['idx']
            $srcPath = $jobs[$idx].Src
            $b = [IO.File]::ReadAllBytes($srcPath)
            $ext = [IO.Path]::GetExtension($srcPath).ToLowerInvariant()
            $res.ContentType = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { 'application/octet-stream' }
            $res.ContentLength64 = $b.Length
            $res.OutputStream.Write($b, 0, $b.Length)
          } elseif ($path -eq '/save') {
            [int]$idx = $req.QueryString['idx']
            $ms = New-Object System.IO.MemoryStream
            $req.InputStream.CopyTo($ms)
            $outBytes = $ms.ToArray()
            $destPath = $jobs[$idx].Dest
            [IO.File]::WriteAllBytes($destPath, $outBytes)
            if (-not (Test-WebpMagic $destPath)) {
              throw "Saved file failed WebP magic check: $destPath ($($outBytes.Length) bytes)"
            }
            $b = [Text.Encoding]::ASCII.GetBytes('ok')
            $res.ContentType = 'text/plain'
            $res.ContentLength64 = $b.Length
            $res.OutputStream.Write($b, 0, $b.Length)
          } elseif ($path -eq '/error') {
            $sr = New-Object System.IO.StreamReader($req.InputStream, [Text.Encoding]::UTF8)
            $errText = $sr.ReadToEnd()
            $b = [Text.Encoding]::ASCII.GetBytes('ack')
            $res.OutputStream.Write($b, 0, $b.Length)
            throw "Headless worker error: $errText"
          } elseif ($path -eq '/done') {
            $b = [Text.Encoding]::ASCII.GetBytes('ok')
            $res.OutputStream.Write($b, 0, $b.Length)
            $done = $true
          } else {
            $res.StatusCode = 404
          }
        } finally {
          try { $res.Close() } catch {}
        }
      }
    } finally {
      if ($listener) { try { $listener.Stop(); $listener.Close() } catch {} }
      if ($proc -and -not $proc.HasExited) { try { $proc.Kill() } catch {} }
      if (Test-Path -LiteralPath $tempProfile) { Remove-Item -LiteralPath $tempProfile -Recurse -Force -ErrorAction SilentlyContinue }
    }
  }

  $totalBytes = ($jobs | ForEach-Object { (Get-Item -LiteralPath $_.Dest).Length } | Measure-Object -Sum).Sum
  Write-Host ("Encoded {0} WebP file(s) successfully ({1} MB total output)." -f $jobs.Count, [math]::Round($totalBytes / 1MB, 2)) -ForegroundColor Green
} finally {
  Pop-Location
}
