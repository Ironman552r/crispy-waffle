@echo off
REM Double-click to publish every change in this folder to GitHub (and the live site).
cd /d "%~dp0"

git add -A
git diff --cached --quiet
if %errorlevel%==0 (
  echo No changes to publish.
  goto pull
)

set "msg=Update site %date% %time:~0,5%"
git commit -q -m "%msg%"
echo Committed: %msg%

:pull
git pull -q --rebase origin main
if errorlevel 1 (
  echo.
  echo Could not sync with GitHub. Someone may have edited the same file online.
  pause
  exit /b 1
)

git push -q origin main
if errorlevel 1 (
  echo.
  echo Push failed. Check your internet connection or GitHub sign-in.
  pause
  exit /b 1
)

echo.
echo Published! The live site updates in about a minute:
echo https://ironman552r.github.io/crispy-waffle/
pause
