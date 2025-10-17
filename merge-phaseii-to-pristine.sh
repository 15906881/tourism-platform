echo === ADDING phase-ii/env-cleanup-remove-backups TO PRISTINE ===

# 1. Verify the phase-ii branch exists
echo 1. Verifying phase-ii/env-cleanup-remove-backups exists...
git show-branch phase-ii/env-cleanup-remove-backups > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo ❌ Error: phase-ii/env-cleanup-remove-backups branch not found locally
    echo Fetching from remote...
    git fetch origin phase-ii/env-cleanup-remove-backups
    if [ $? -ne 0 ]; then
        echo ❌ Error: phase-ii/env-cleanup-remove-backups not found remotely either
        exit 1
    fi
fi

# 2. Get the exact commit SHA of phase-ii
PHASEII_SHA=$(git rev-parse phase-ii/env-cleanup-remove-backups)
echo ✅ phase-ii/env-cleanup-remove-backups found at SHA: $PHASEII_SHA

# 3. Merge phase-ii into Pristine and stop for conflict review
echo 2. Merging phase-ii/env-cleanup-remove-backups into Pristine...
git checkout Pristine
git merge --no-ff phase-ii/env-cleanup-remove-backups

# 4. Check if there are conflicts
CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
if [ -n "$CONFLICT_FILES" ]; then
    echo ""
    echo "❌ MERGE CONFLICTS DETECTED - REQUIRES MANUAL REVIEW"
    echo "==================================================="
    echo "Conflicted files:"
    echo "$CONFLICT_FILES"
    echo ""
    echo "To resolve conflicts:"
    echo "1. Review each file: git diff for each conflicted file"
    echo "2. Choose which version to keep (Pristine/golden vs phase-ii)"
    echo "3. For each file, run:"
    echo "   - git checkout --ours -- <file>   (keep Pristine/golden version)"
    echo "   - git checkout --theirs -- <file> (keep phase-ii version)"
    echo "   - Or manually edit the file to combine changes"
    echo "4. After resolving each file: git add <file>"
    echo "5. When all conflicts resolved: git commit"
    echo ""
    echo "Current merge status:"
    git status
else
    echo "✅ No conflicts detected - merge completed automatically"
    git push origin Pristine
    echo "=== COMPLETED ==="
    echo "✅ Pristine now contains: golden + phase-ii/env-cleanup-remove-backups"
fi
