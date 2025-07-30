@echo off
REM Site Control Script for Fanoos Light Path (Windows)
REM Usage: scripts\site-control.bat [up|down|status]

set REPO=erfiish/Fanoos-Portfolio
set SITE_URL=https://fanoosai.com

if "%1"=="down" (
    echo 🛑 Taking site down...
    echo 1. Go to: https://github.com/%REPO%/settings/pages
    echo 2. Change Source from 'GitHub Actions' to 'None'
    echo 3. Click Save
    echo 4. Site will be unavailable immediately
    goto :eof
)

if "%1"=="up" (
    echo 🚀 Bringing site back up...
    echo 1. Go to: https://github.com/%REPO%/settings/pages
    echo 2. Change Source back to 'GitHub Actions'
    echo 3. Click Save
    echo 4. Site will be back up in 5-10 minutes
    echo.
    echo Or trigger deployment manually:
    echo git commit --allow-empty -m "Trigger deployment" ^&^& git push
    goto :eof
)

if "%1"=="status" (
    echo 📊 Checking site status...
    echo Site URL: %SITE_URL%
    echo GitHub Pages: https://erfiish.github.io/Fanoos-Portfolio/
    echo.
    echo To check if site is up:
    echo curl -I %SITE_URL%
    goto :eof
)

echo Usage: %0 [up^|down^|status]
echo.
echo Commands:
echo   down   - Take site offline
echo   up     - Bring site back online
echo   status - Check site status 