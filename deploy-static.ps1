
$ErrorActionPreference = "Stop"

# Project configuration
$projectDir = $PSScriptRoot
$distDir = Join-Path $projectDir "dist"
$deployDir = Join-Path $projectDir "depolyee"

# SECOND repository URL (static deployment only)
$deployRepoUrl = "https://github.com/UmairYousafzia/rahim-sons-static.git"

Write-Host "`nBuilding React website..." -ForegroundColor Cyan

Push-Location $projectDir

try {

    # 1. Build React project
    npm run build

    if ($LASTEXITCODE -ne 0) {
        throw "React build failed."
    }

    if (!(Test-Path $distDir)) {
        throw "dist folder not found."
    }

    # 2. Create deployment directory
    if (!(Test-Path $deployDir)) {
        New-Item -ItemType Directory -Path $deployDir | Out-Null
    }

    # 3. Initialize separate Git repository
    if (!(Test-Path (Join-Path $deployDir ".git"))) {

        git -C $deployDir init -b main

        if ($LASTEXITCODE -ne 0) {
            throw "Could not initialize deployment Git repository."
        }
    }

    # 4. Configure separate deployment remote
    $existingRemote = git -C $deployDir remote

    if ($LASTEXITCODE -ne 0) {
        throw "Could not read deployment remotes."
    }

    if ($existingRemote -contains "outmain") {
        git -C $deployDir remote set-url outmain $deployRepoUrl
    }
    else {
        git -C $deployDir remote add outmain $deployRepoUrl
    }

    if ($LASTEXITCODE -ne 0) {
        throw "Could not configure outmain remote."
    }

    # 5. Switch deployment repository to main
    git -C $deployDir checkout -B main

    if ($LASTEXITCODE -ne 0) {
        throw "Could not switch deployment branch."
    }

    # 6. Remove old production files, preserve .git
    Get-ChildItem $deployDir -Force |
        Where-Object { $_.Name -ne ".git" } |
        Remove-Item -Recurse -Force

    # 7. Copy Vite dist contents
    Get-ChildItem $distDir -Force |
        Copy-Item -Destination $deployDir -Recurse -Force

    # 8. Commit deployment files
    git -C $deployDir add -A

    if ($LASTEXITCODE -ne 0) {
        throw "Git add failed."
    }

    git -C $deployDir diff --cached --quiet

    if ($LASTEXITCODE -eq 1) {

        git -C $deployDir commit -m "Update React static website"

        if ($LASTEXITCODE -ne 0) {
            throw "Deployment commit failed."
        }

    }
    elseif ($LASTEXITCODE -ne 0) {
        throw "Could not check deployment changes."
    }
    else {
        Write-Host "No new production changes." -ForegroundColor Yellow
    }

    # 9. Push to SECOND repository
    Write-Host "`nPushing static files to deployment repository..." -ForegroundColor Cyan

    git -C $deployDir push -u outmain main

    if ($LASTEXITCODE -ne 0) {
        throw "Deployment push failed."
    }

    Write-Host "`nStatic deployment completed successfully!" -ForegroundColor Green

}
finally {
    Pop-Location
}
