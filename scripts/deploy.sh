#!/bin/bash

# Deployment script for Fanoosai.com
echo "🚀 Starting deployment process..."

# Check if we're on main branch
if [[ $(git branch --show-current) != "main" ]]; then
    echo "❌ Please switch to main branch before deploying"
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build successful"

# Commit and push
echo "📤 Pushing to GitHub..."
git add .
git commit -m "Deploy: $(date)"
git push origin main

echo "✅ Deployment initiated!"
echo "🌐 Your site will be available at https://fanoosai.com in 5-10 minutes"
echo "📊 Check deployment status at: https://github.com/erfiish/Fanoos-Portfolio/actions" 