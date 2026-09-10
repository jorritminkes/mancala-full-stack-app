@echo off
cd /d C:\Users\jorri\Documents\git-repos\mancala-app

echo ========================================
echo Running Maven Clean Install...
echo ========================================
call mvn clean install

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Maven build failed! Aborting server startup.
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================
echo Build successful! Starting Mancala servers...
echo ========================================

wt -w 0 new-tab --title "Mancala Client" cmd /k "cd /d C:\Users\jorri\Documents\git-repos\mancala-app\client && npm run dev" ; new-tab --title "Mancala API" cmd /k "cd /d C:\Users\jorri\Documents\git-repos\mancala-app\api && mvn spring-boot:run"