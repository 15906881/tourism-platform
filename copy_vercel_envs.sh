#!/bin/bash

# Set your project IDs and scope
SOURCE_PROJECT='prj_4ozG5uqO8lXuI6OiKvcrUYgPvPhN'
TARGET_PROJECT='prj_5sJr8jCwLDLOsTbBJJMUlTf09Zl2'
SCOPE='cranadmin'
ENV_FILE='.env.sr-source'

echo '🚀 Starting environment variable transfer...'
echo 'Source: '$SOURCE_PROJECT
echo 'Target: '$TARGET_PROJECT
echo 'Scope: '$SCOPE

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo '❌ Vercel CLI is not installed. Please install it first:'
    echo 'npm i -g vercel'
    exit 1
fi

# Pull environment variables from source project
echo '📥 Pulling environment variables from source project...'
vercel env pull $ENV_FILE --scope $SCOPE --project $SOURCE_PROJECT

if [ $? -ne 0 ]; then
    echo '❌ Failed to pull environment variables. Please check:'
    echo '   - Your Vercel login status (run '\''vercel login'\'')'
    echo '   - Project IDs and scope are correct'
    echo '   - You have access to both projects'
    exit 1
fi

echo '✅ Successfully pulled environment variables to '$ENV_FILE

# Optional: Review/edit the environment file
echo '📝 You can now review/edit '$ENV_FILE' if needed'
read -p 'Press Enter to continue with the import, or Ctrl+C to cancel and edit the file first...'

# Push environment variables to target project
echo '📤 Pushing environment variables to target project...'
vercel env import $ENV_FILE --scope $SCOPE --project $TARGET_PROJECT

if [ $? -eq 0 ]; then
    echo '🎉 Successfully transferred all environment variables!'
    echo '💡 You can now safely remove the temporary file: rm '$ENV_FILE
else
    echo '❌ Failed to import environment variables to target project'
    exit 1
fi
