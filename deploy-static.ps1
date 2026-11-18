
$ErrorActionPreference = "Stop"

# Project directories
$projectDir = $PSScriptRoot
$distDir = Join-Path $projectDir "dist"
$deployDir = Join-Path $projectDir "depolyee"

Write-Host "`nBuilding React website..." -ForegroundColor Cyan

Push-Location $projectDir

try {
    npm run build

    if ($LASTEXITCODE -ne 0) {
        throw "React build failed."
    }

    if (!(Test-Path $distDir)) {
        throw "dist folder not found."
    }

    # Get existing GitHub repository URL
    $repoUrl = git remote get-url origin

    if ($LASTEXITCODE -ne 0 -or !$repoUrl) {
        throw "Could not find the origin Git remote."
    }

    # Create deployment directory
    if (!(Test-Path $deployDir)) {
        New-Item -ItemType Directory -Path $deployDir | Out-Null
    }

    # Initialize deployment Git repository if needed
    if (!(Test-Path (Join-Path $deployDir ".git"))) {
        git -C $deployDir init -b gh-pages

        if ($LASTEXITCODE -ne 0) {
            throw "Could not initialize deployment repository."
        }
    }

    # Configure deployment remote
    git -C $deployDir remote get-url origin 2>$null | Out-Null

    if ($LASTEXITCODE -eq 0) {
        git -C $deployDir remote set-url origin $repoUrl
    }
    else {
        git -C $deployDir remote add origin $repoUrl
    }

    # Remove old production files, preserving .git
    Get-ChildItem $deployDir -Force |
        Where-Object { $_.Name -ne ".git" } |
        Remove-Item -Recurse -Force

    # Copy new Vite production build
    Get-ChildItem $distDir -Force |
        Copy-Item -Destination $deployDir -Recurse -Force

    # Commit and deploy
    git -C $deployDir add -A

    git -C $deployDir diff --cached --quiet

    if ($LASTEXITCODE -ne 0) {
        git -C $deployDir commit -m "Update React static website"

        if ($LASTEXITCODE -ne 0) {
            throw "Deployment commit failed."
        }
    }
    else {
        Write-Host "No new changes to commit." -ForegroundColor Yellow
    }

    Write-Host "`nPushing production files to gh-pages..." -ForegroundColor Cyan

    git -C $deployDir push -u origin HEAD:gh-pages --force

    if ($LASTEXITCODE -ne 0) {
        throw "Deployment push failed."
    }

    Write-Host "`nDeployment completed successfully!" -ForegroundColor Green
}
finally {
    Pop-Location
}
