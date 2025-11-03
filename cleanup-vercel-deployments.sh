#!/bin/bash

# Cleanup Vercel deployments for site-renderer project
# Keeps only the successful deployment: 8ekgkFFx4

set -e

TEAM_ID="team_vwUCz0klM98gJGmXcVHVqnwV"  # Your personal team
PROJECT_NAME="site-renderer"              # Project name
KEEP_DEPLOYMENT="8ekgkFFx4"               # Your successful deployment ID

echo "🚀 Starting Vercel deployment cleanup for project: $PROJECT_NAME"
echo "📋 Will keep deployment: $KEEP_DEPLOYMENT"
echo "🏢 Team: $TEAM_ID"

# Make sure we're logged in and using the correct team
echo "🔐 Switching to team: $TEAM_ID"
vercel switch $TEAM_ID

echo "🔍 Fetching deployments for project $PROJECT_NAME..."

# Get all production deployments
DEPLOYMENTS=$(vercel ls $PROJECT_NAME --scope $TEAM_ID --prod --json)

# Extract deployment IDs to delete (all except the one to keep)
DEPLOYMENT_IDS=$(echo "$DEPLOYMENTS" | jq -r --arg keep "$KEEP_DEPLOYMENT" '.[] | select(.uid != $keep) | .uid')

if [ -z "$DEPLOYMENT_IDS" ]; then
    echo "✅ No deployments found to delete (or only the successful one exists)"
    exit 0
fi

COUNT=$(echo "$DEPLOYMENT_IDS" | wc -l)
echo "🗑️  Found $COUNT deployments to delete:"
echo "$DEPLOYMENT_IDS"

echo ""
read -p "❓ Are you sure you want to delete these $COUNT deployments? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cleanup cancelled"
    exit 1
fi

echo "⏳ Starting deletion..."
COUNTER=0

# Delete each deployment
for DEPLOYMENT_ID in $DEPLOYMENT_IDS; do
    COUNTER=$((COUNTER + 1))
    echo "🔴 [$COUNTER/$COUNT] Deleting deployment: $DEPLOYMENT_ID"
    vercel rm $DEPLOYMENT_ID --scope $TEAM_ID --yes
    
    # Small delay to avoid rate limiting
    sleep 0.5
done

echo ""
echo "✅ Cleanup completed! Deleted $COUNT deployments."
echo "✅ Kept successful deployment: $KEEP_DEPLOYMENT"
echo "🌐 Your production URL remains: https://site-renderer-dnmocedfx-cranadmin.vercel.app"
