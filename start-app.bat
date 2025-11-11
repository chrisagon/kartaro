@echo off
echo ========================================
echo   Demarrage de l'Application Fresquia
echo ========================================
echo.

echo [1/3] Demarrage du Backend...
cd backend
start "Backend Server" cmd /k "node src/index.js"
timeout /t 3 /nobreak >nul

echo [2/3] Demarrage du Frontend...
cd ..\frontend
start "Frontend Server" cmd /k "npm run dev"

echo [3/3] Ouverture du navigateur...
timeout /t 5 /nobreak >nul
start http://localhost:3000

echo.
echo ========================================
echo   Application demarree avec succes!
echo ========================================
echo.
echo Backend: http://localhost:3001
echo Frontend: http://localhost:3000
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
