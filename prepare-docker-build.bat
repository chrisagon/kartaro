@echo off
echo Preparing Docker build...

REM Copy frontend to backend directory for Docker build
if exist backend\frontend rmdir /s /q backend\frontend
xcopy frontend backend\frontend /E /I /H /Y

echo Frontend copied to backend directory for Docker build.
echo You can now run: docker-compose up --build
