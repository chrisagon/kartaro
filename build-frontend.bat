@echo off
echo Building frontend for production...

cd frontend

echo Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install frontend dependencies
    pause
    exit /b 1
)

echo Building frontend...
call npm run build
if %errorlevel% neq 0 (
    echo Error: Failed to build frontend
    pause
    exit /b 1
)

cd ..
echo Moving build to root...
if exist build rmdir /s /q build
move frontend\build build

echo Frontend built successfully!
echo Build available in ./build directory
