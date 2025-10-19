#!/bin/bash

echo "========================================="
echo "  CONFLICT VIEWER - Side by Side"
echo "========================================="
echo ""

# Get list of conflicted files
CONFLICT_FILES=$(git diff --name-only --diff-filter=U)

if [ -z "$CONFLICT_FILES" ]; then
    echo "No conflicts found!"
    exit 0
fi

echo "Found $(echo "$CONFLICT_FILES" | wc -l) conflicted files"
echo ""

for file in $CONFLICT_FILES; do
    echo "========================================="
    echo "FILE: $file"
    echo "========================================="
    echo ""
    
    echo "--- PRISTINE/GOLDEN VERSION (--ours) ---"
    git show :2:"$file" 2>/dev/null | head -50
    
    echo ""
    echo "--- PHASE-II VERSION (--theirs) ---"
    git show :3:"$file" 2>/dev/null | head -50
    
    echo ""
    echo "--- CURRENT FILE WITH CONFLICT MARKERS ---"
    head -100 "$file"
    
    echo ""
    echo "Press ENTER to see next file, or Ctrl+C to quit"
    read
    clear
done

echo ""
echo "All conflicts reviewed!"
