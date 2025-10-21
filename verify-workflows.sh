#!/bin/bash
set -e

echo "⚙️ Discovering GitHub workflows..."

echo "Workflow files:"
find .github/workflows -name "*.yml" -o -name "*.yaml" 2>/dev/null | while read file; do
  echo "📄 $file"
  grep -h "name:" "$file" | head -1 | sed 's/^/  Name: /' || echo "  Name: (not specified)"
done

echo ""
echo "To list workflows with GitHub CLI:"
echo "gh workflow list"
echo ""
echo "To view recent runs:"
echo "gh run list --limit 5"
echo ""
echo "To view a specific workflow run:"
echo "gh run view <run-id>"
