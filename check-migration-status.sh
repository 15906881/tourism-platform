#!/bin/bash
echo "Migration Status Check"
echo "======================"

# Check current DNS (will change after domain setup)
echo "Current DNS:"
echo "weblynk.app -> $(dig weblynk.app +short 2>/dev/null | head -1)"
echo "*.weblynk.app -> $(dig \"*.weblynk.app\" +short 2>/dev/null | head -1)"

echo ""
echo "Next Steps:"
echo "1. Check Amplify Console for build status"
echo "2. If build succeeded, add domains in Amplify"
echo "3. If build failed, check build logs for errors"
echo ""
echo "Amplify Console URL: https://us-east-1.console.aws.amazon.com/amplify"
