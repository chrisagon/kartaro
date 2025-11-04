@echo off
echo ===================================
echo   Deploy to Render
echo ===================================
echo.

echo [1/4] Checking git status...
git status --porcelain
if %errorlevel% neq 0 (
    echo Error: Git command failed
    pause
    exit /b 1
)

echo.
echo [2/4] Adding all changes...
git add .
if %errorlevel% neq 0 (
    echo Error: Failed to add files
    pause
    exit /b 1
)

echo.
echo [3/4] Committing changes...
git commit -m "feat: add Docker deployment for Render"
if %errorlevel% neq 0 (
    echo No changes to commit or commit failed
)

echo.
echo [4/4] Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo Error: Failed to push to GitHub
    pause
    exit /b 1
)

echo.
echo ===================================
echo   Deployment Ready!
echo ===================================
echo.
echo Your code has been pushed to GitHub.
echo.
echo Next steps:
echo 1. Go to https://dashboard.render.com
echo 2. Click "New" -^> "Blueprint"
echo 3. Connect your GitHub repository
echo 4. Render will auto-detect render.yaml
echo 5. Add your environment variables:
echo    - GEMINI_API_KEY
echo    - STABILITY_API_KEY
echo    - FIREBASE_PROJECT_ID
echo.
echo Press any key to open Render dashboard...
pause >nul
start https://dashboard.render.com
