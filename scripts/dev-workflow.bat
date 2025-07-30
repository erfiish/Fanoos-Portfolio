@echo off
REM Development Workflow Script for Fanoos Light Path
REM Usage: scripts\dev-workflow.bat [dev|test|deploy|status]

set REPO=erfiish/Fanoos-Portfolio

if "%1"=="dev" (
    echo 🛠️ Starting development workflow...
    echo.
    echo 1. You're now on 'develop' branch
    echo 2. Start development server: npm run dev
    echo 3. Make your changes
    echo 4. Test locally at: http://localhost:8080/
    echo 5. When ready to deploy: scripts\dev-workflow.bat deploy
    goto :eof
)

if "%1"=="test" (
    echo 🧪 Testing your changes...
    echo.
    echo Building for testing...
    npm run build
    if %errorlevel% equ 0 (
        echo ✅ Build successful! Ready for deployment.
    ) else (
        echo ❌ Build failed! Fix errors before deploying.
    )
    goto :eof
)

if "%1"=="deploy" (
    echo 🚀 Deploying to production...
    echo.
    echo 1. Building for production...
    npm run build
    if %errorlevel% neq 0 (
        echo ❌ Build failed! Cannot deploy.
        goto :eof
    )
    
    echo 2. Committing changes...
    git add .
    git commit -m "Deploy: %date% %time%"
    
    echo 3. Switching to main branch...
    git checkout main
    
    echo 4. Merging develop branch...
    git merge develop
    
    echo 5. Pushing to GitHub...
    git push origin main
    
    echo 6. Switching back to develop...
    git checkout develop
    
    echo ✅ Deployment complete! Site will be live in 5-10 minutes.
    echo 🌐 Check: https://fanoosai.com
    goto :eof
)

if "%1"=="status" (
    echo 📊 Development Status...
    echo.
    git branch
    echo.
    echo Current branch: 
    git branch --show-current
    echo.
    echo Recent commits:
    git log --oneline -5
    goto :eof
)

echo Usage: %0 [dev^|test^|deploy^|status]
echo.
echo Development Workflow:
echo   dev     - Start development (creates develop branch)
echo   test    - Test your changes before deployment
echo   deploy  - Deploy changes to production
echo   status  - Check current branch and status
echo.
echo Workflow:
echo   1. scripts\dev-workflow.bat dev
echo   2. npm run dev (for local testing)
echo   3. Make changes and test
echo   4. scripts\dev-workflow.bat test
echo   5. scripts\dev-workflow.bat deploy 