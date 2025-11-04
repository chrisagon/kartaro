@echo off
echo ===================================
echo   Fresquia Docker Deployment
echo ===================================
echo.

if "%1"=="help" goto :help
if "%1"=="build" goto :build
if "%1"=="start" goto :start
if "%1"=="stop" goto :stop
if "%1"=="logs" goto :logs
if "%1"=="clean" goto :clean

echo Usage: docker-deploy.bat [command]
echo.
echo Commands:
echo   help    - Show this help
echo   build   - Build Docker images
echo   start   - Start services
echo   stop    - Stop services
echo   logs    - Show logs
echo   clean   - Remove containers and volumes
echo.
echo Example: docker-deploy.bat start
goto :end

:help
echo.
echo Fresquia Docker Deployment Script
echo ===================================
echo.
echo This script helps you deploy Fresquia using Docker.
echo.
echo Prerequisites:
echo - Docker Desktop installed and running
echo - docker-compose available
echo.
echo Setup:
echo 1. Copy backend/.env.example to backend/.env
echo 2. Edit backend/.env with your API keys
echo 3. Run: docker-deploy.bat build
echo 4. Run: docker-deploy.bat start
echo.
echo The API will be available at: http://localhost:3001
goto :end

:build
echo Building Docker images...
docker-compose build --no-cache
goto :end

:start
echo Starting services...
docker-compose up -d
echo.
echo Services starting... This may take a few minutes.
echo.
echo Once ready, the API will be available at: http://localhost:3001
echo.
echo To view logs: docker-deploy.bat logs
echo To stop: docker-deploy.bat stop
goto :end

:stop
echo Stopping services...
docker-compose down
goto :end

:logs
echo Showing logs (Ctrl+C to exit)...
docker-compose logs -f backend
goto :end

:clean
echo WARNING: This will remove all containers, images, and volumes (including data)!
echo Press any key to continue or Ctrl+C to cancel...
pause >nul
echo.
echo Cleaning up...
docker-compose down -v --remove-orphans
docker system prune -f
echo Cleanup complete.
goto :end

:end
