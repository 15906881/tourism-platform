#!/bin/bash
echo "Vercel Cleanup Script (Run after successful Amplify migration)"
echo "=============================================================="

echo "Files to remove after Amplify is live:"
find . -name "vercel.json" -o -name ".vercel" -type d

echo ""
echo "Manual steps needed:"
echo "1. Go to Vercel dashboard"
echo "2. Find your tourism-platform project" 
echo "3. Remove domain associations:"
echo "   - weblynk.app"
echo "   - *.weblynk.app"
echo "4. Cancel any active builds"
echo "5. (Optional) Delete project or close account"
