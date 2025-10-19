#!/bin/bash

echo "========================================"
echo "  GOLDEN vs PRISTINE VERIFICATION TEST"
echo "========================================"
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASS_COUNT=0
FAIL_COUNT=0

# Test function
run_test() {
    local test_name="$1"
    local test_result="$2"
    
    if [ "$test_result" = "PASS" ]; then
        echo -e "${GREEN}✅ PASS${NC}: $test_name"
        ((PASS_COUNT++))
    else
        echo -e "${RED}❌ FAIL${NC}: $test_name"
        ((FAIL_COUNT++))
    fi
}

echo "Test Suite Started: $(date)"
echo ""

# TEST 1: Verify both branches exist
echo "TEST 1: Branch Existence"
echo "------------------------"
git rev-parse --verify golden/golden-20251012-1043 > /dev/null 2>&1
GOLDEN_EXISTS=$?
git rev-parse --verify Pristine > /dev/null 2>&1
PRISTINE_EXISTS=$?

if [ $GOLDEN_EXISTS -eq 0 ] && [ $PRISTINE_EXISTS -eq 0 ]; then
    run_test "Both branches exist" "PASS"
else
    run_test "Both branches exist" "FAIL"
    echo "   Golden exists: $GOLDEN_EXISTS (0=yes)"
    echo "   Pristine exists: $PRISTINE_EXISTS (0=yes)"
fi
echo ""

# TEST 2: Commit SHA comparison
echo "TEST 2: Commit SHA Comparison"
echo "------------------------------"
GOLDEN_SHA=$(git rev-parse golden/golden-20251012-1043 2>/dev/null || echo "ERROR")
PRISTINE_SHA=$(git rev-parse Pristine 2>/dev/null || echo "ERROR")
echo "   Golden SHA:   $GOLDEN_SHA"
echo "   Pristine SHA: $PRISTINE_SHA"

if [ "$GOLDEN_SHA" = "$PRISTINE_SHA" ] && [ "$GOLDEN_SHA" != "ERROR" ]; then
    run_test "Commit SHAs match" "PASS"
else
    run_test "Commit SHAs match" "FAIL"
fi
echo ""

# TEST 3: Git tree hash comparison
echo "TEST 3: Git Tree Hash Comparison"
echo "---------------------------------"
GOLDEN_TREE=$(git rev-parse golden/golden-20251012-1043^{tree} 2>/dev/null || echo "ERROR")
PRISTINE_TREE=$(git rev-parse Pristine^{tree} 2>/dev/null || echo "ERROR")
echo "   Golden tree:   $GOLDEN_TREE"
echo "   Pristine tree: $PRISTINE_TREE"

if [ "$GOLDEN_TREE" = "$PRISTINE_TREE" ] && [ "$GOLDEN_TREE" != "ERROR" ]; then
    run_test "Tree hashes match" "PASS"
else
    run_test "Tree hashes match" "FAIL"
fi
echo ""

# TEST 4: File count comparison
echo "TEST 4: File Count Comparison"
echo "------------------------------"
CURRENT_BRANCH=$(git branch --show-current)
git checkout golden/golden-20251012-1043 > /dev/null 2>&1
GOLDEN_FILE_COUNT=$(git ls-tree -r HEAD 2>/dev/null | wc -l | tr -d ' ')
git checkout Pristine > /dev/null 2>&1
PRISTINE_FILE_COUNT=$(git ls-tree -r HEAD 2>/dev/null | wc -l | tr -d ' ')
echo "   Golden files:   $GOLDEN_FILE_COUNT"
echo "   Pristine files: $PRISTINE_FILE_COUNT"

if [ "$GOLDEN_FILE_COUNT" = "$PRISTINE_FILE_COUNT" ] && [ "$GOLDEN_FILE_COUNT" != "0" ]; then
    run_test "File counts match" "PASS"
else
    run_test "File counts match" "FAIL"
fi
echo ""

# TEST 5: Diff check (should be empty)
echo "TEST 5: Content Diff Check"
echo "--------------------------"
DIFF_OUTPUT=$(git diff --name-status golden/golden-20251012-1043 Pristine 2>/dev/null || echo "")
DIFF_LINES=$(echo "$DIFF_OUTPUT" | grep -v '^$' | wc -l | tr -d ' ')
echo "   Differences found: $DIFF_LINES files"

if [ "$DIFF_LINES" = "0" ]; then
    run_test "No content differences" "PASS"
else
    run_test "No content differences" "FAIL"
    echo "   Files with differences:"
    echo "$DIFF_OUTPUT"
fi
echo ""

# TEST 6: Commit history comparison
echo "TEST 6: Commit History Check"
echo "----------------------------"
GOLDEN_COMMIT_COUNT=$(git rev-list --count golden/golden-20251012-1043 2>/dev/null || echo "0")
PRISTINE_COMMIT_COUNT=$(git rev-list --count Pristine 2>/dev/null || echo "0")
echo "   Golden commits:   $GOLDEN_COMMIT_COUNT"
echo "   Pristine commits: $PRISTINE_COMMIT_COUNT"

if [ "$GOLDEN_COMMIT_COUNT" = "$PRISTINE_COMMIT_COUNT" ] && [ "$GOLDEN_COMMIT_COUNT" != "0" ]; then
    run_test "Commit counts match" "PASS"
else
    run_test "Commit counts match" "FAIL"
fi
echo ""

# TEST 7: File-by-file checksum
echo "TEST 7: File Checksum Verification"
echo "-----------------------------------"
git checkout golden/golden-20251012-1043 > /dev/null 2>&1
GOLDEN_CHECKSUM=$(git ls-tree -r HEAD 2>/dev/null | git hash-object --stdin 2>/dev/null || echo "ERROR")
git checkout Pristine > /dev/null 2>&1
PRISTINE_CHECKSUM=$(git ls-tree -r HEAD 2>/dev/null | git hash-object --stdin 2>/dev/null || echo "ERROR")
echo "   Golden checksum:   $GOLDEN_CHECKSUM"
echo "   Pristine checksum: $PRISTINE_CHECKSUM"

if [ "$GOLDEN_CHECKSUM" = "$PRISTINE_CHECKSUM" ] && [ "$GOLDEN_CHECKSUM" != "ERROR" ]; then
    run_test "File checksums match" "PASS"
else
    run_test "File checksums match" "FAIL"
fi
echo ""

# TEST 8: Check for uncommitted changes
echo "TEST 8: Clean Working Directory"
echo "--------------------------------"
git checkout Pristine > /dev/null 2>&1
UNCOMMITTED=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
echo "   Uncommitted changes: $UNCOMMITTED"

if [ "$UNCOMMITTED" = "0" ]; then
    run_test "No uncommitted changes" "PASS"
else
    run_test "No uncommitted changes" "FAIL"
    git status --short 2>/dev/null
fi
echo ""

# TEST 9: Branch divergence check
echo "TEST 9: Branch Divergence Check"
echo "--------------------------------"
DIVERGENCE=$(git rev-list --left-right --count golden/golden-20251012-1043...Pristine 2>/dev/null || echo "ERROR")
echo "   Divergence: $DIVERGENCE"

if [ "$DIVERGENCE" = "0	0" ]; then
    run_test "No branch divergence" "PASS"
else
    run_test "No branch divergence" "FAIL"
fi
echo ""

# TEST 10: Commit message comparison
echo "TEST 10: Latest Commit Message"
echo "-------------------------------"
GOLDEN_MSG=$(git log golden/golden-20251012-1043 -1 --pretty=format:"%s" 2>/dev/null || echo "ERROR")
PRISTINE_MSG=$(git log Pristine -1 --pretty=format:"%s" 2>/dev/null || echo "ERROR")
echo "   Golden:   $GOLDEN_MSG"
echo "   Pristine: $PRISTINE_MSG"

if [ "$GOLDEN_MSG" = "$PRISTINE_MSG" ] && [ "$GOLDEN_MSG" != "ERROR" ]; then
    run_test "Commit messages match" "PASS"
else
    run_test "Commit messages match" "FAIL"
fi
echo ""

# Return to original branch if needed
if [ -n "$CURRENT_BRANCH" ]; then
    git checkout "$CURRENT_BRANCH" > /dev/null 2>&1
fi

# FINAL SUMMARY
echo "========================================"
echo "           TEST SUMMARY"
echo "========================================"
echo -e "${GREEN}Passed: $PASS_COUNT${NC}"
echo -e "${RED}Failed: $FAIL_COUNT${NC}"
echo "Total:  $((PASS_COUNT + FAIL_COUNT))"
echo ""

if [ $FAIL_COUNT -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL TESTS PASSED!${NC}"
    echo "✅ Pristine is an exact duplicate of golden/golden-20251012-1043"
    exit 0
else
    echo -e "${RED}⚠️  SOME TESTS FAILED!${NC}"
    echo "❌ Pristine may not be an exact duplicate"
    exit 1
fi#!/bin/bash
set -e

echo "========================================"
echo "  GOLDEN vs PRISTINE VERIFICATION TEST"
echo "========================================"
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASS_COUNT=0
FAIL_COUNT=0

# Test function
run_test() {
    local test_name="$1"
    local test_result="$2"
    
    if [ "$test_result" = "PASS" ]; then
        echo -e "${GREEN}✅ PASS${NC}: $test_name"
        ((PASS_COUNT++))
    else
        echo -e "${RED}❌ FAIL${NC}: $test_name"
        ((FAIL_COUNT++))
    fi
}

echo "Test Suite Started: $(date)"
echo ""

# TEST 1: Verify both branches exist
echo "TEST 1: Branch Existence"
echo "------------------------"
git rev-parse --verify golden/golden-20251012-1043 > /dev/null 2>&1
GOLDEN_EXISTS=$?
git rev-parse --verify Pristine > /dev/null 2>&1
PRISTINE_EXISTS=$?

if [ $GOLDEN_EXISTS -eq 0 ] && [ $PRISTINE_EXISTS -eq 0 ]; then
    run_test "Both branches exist" "PASS"
else
    run_test "Both branches exist" "FAIL"
    echo "   Golden exists: $GOLDEN_EXISTS (0=yes)"
    echo "   Pristine exists: $PRISTINE_EXISTS (0=yes)"
fi
echo ""

# TEST 2: Commit SHA comparison
echo "TEST 2: Commit SHA Comparison"
echo "------------------------------"
GOLDEN_SHA=$(git rev-parse golden/golden-20251012-1043)
PRISTINE_SHA=$(git rev-parse Pristine)
echo "   Golden SHA:   $GOLDEN_SHA"
echo "   Pristine SHA: $PRISTINE_SHA"

if [ "$GOLDEN_SHA" = "$PRISTINE_SHA" ]; then
    run_test "Commit SHAs match" "PASS"
else
    run_test "Commit SHAs match" "FAIL"
fi
echo ""

# TEST 3: Git tree hash comparison
echo "TEST 3: Git Tree Hash Comparison"
echo "---------------------------------"
GOLDEN_TREE=$(git rev-parse golden/golden-20251012-1043^{tree})
PRISTINE_TREE=$(git rev-parse Pristine^{tree})
echo "   Golden tree:   $GOLDEN_TREE"
echo "   Pristine tree: $PRISTINE_TREE"

if [ "$GOLDEN_TREE" = "$PRISTINE_TREE" ]; then
    run_test "Tree hashes match" "PASS"
else
    run_test "Tree hashes match" "FAIL"
fi
echo ""

# TEST 4: File count comparison
echo "TEST 4: File Count Comparison"
echo "------------------------------"
git checkout golden/golden-20251012-1043 > /dev/null 2>&1
GOLDEN_FILE_COUNT=$(git ls-tree -r HEAD | wc -l | tr -d ' ')
git checkout Pristine > /dev/null 2>&1
PRISTINE_FILE_COUNT=$(git ls-tree -r HEAD | wc -l | tr -d ' ')
echo "   Golden files:   $GOLDEN_FILE_COUNT"
echo "   Pristine files: $PRISTINE_FILE_COUNT"

if [ "$GOLDEN_FILE_COUNT" = "$PRISTINE_FILE_COUNT" ]; then
    run_test "File counts match" "PASS"
else
    run_test "File counts match" "FAIL"
fi
echo ""

# TEST 5: Diff check (should be empty)
echo "TEST 5: Content Diff Check"
echo "--------------------------"
DIFF_OUTPUT=$(git diff --name-status golden/golden-20251012-1043 Pristine)
DIFF_LINES=$(echo "$DIFF_OUTPUT" | grep -v '^$' | wc -l | tr -d ' ')
echo "   Differences found: $DIFF_LINES files"

if [ "$DIFF_LINES" = "0" ]; then
    run_test "No content differences" "PASS"
else
    run_test "No content differences" "FAIL"
    echo "   Files with differences:"
    echo "$DIFF_OUTPUT"
fi
echo ""

# TEST 6: Commit history comparison
echo "TEST 6: Commit History Check"
echo "----------------------------"
GOLDEN_COMMIT_COUNT=$(git rev-list --count golden/golden-20251012-1043)
PRISTINE_COMMIT_COUNT=$(git rev-list --count Pristine)
echo "   Golden commits:   $GOLDEN_COMMIT_COUNT"
echo "   Pristine commits: $PRISTINE_COMMIT_COUNT"

if [ "$GOLDEN_COMMIT_COUNT" = "$PRISTINE_COMMIT_COUNT" ]; then
    run_test "Commit counts match" "PASS"
else
    run_test "Commit counts match" "FAIL"
fi
echo ""

# TEST 7: File-by-file checksum
echo "TEST 7: File Checksum Verification"
echo "-----------------------------------"
git checkout golden/golden-20251012-1043 > /dev/null 2>&1
GOLDEN_CHECKSUM=$(git ls-tree -r HEAD | git hash-object --stdin)
git checkout Pristine > /dev/null 2>&1
PRISTINE_CHECKSUM=$(git ls-tree -r HEAD | git hash-object --stdin)
echo "   Golden checksum:   $GOLDEN_CHECKSUM"
echo "   Pristine checksum: $PRISTINE_CHECKSUM"

if [ "$GOLDEN_CHECKSUM" = "$PRISTINE_CHECKSUM" ]; then
    run_test "File checksums match" "PASS"
else
    run_test "File checksums match" "FAIL"
fi
echo ""

# TEST 8: Check for uncommitted changes
echo "TEST 8: Clean Working Directory"
echo "--------------------------------"
git checkout Pristine > /dev/null 2>&1
UNCOMMITTED=$(git status --porcelain | wc -l | tr -d ' ')
echo "   Uncommitted changes: $UNCOMMITTED"

if [ "$UNCOMMITTED" = "0" ]; then
    run_test "No uncommitted changes" "PASS"
else
    run_test "No uncommitted changes" "FAIL"
    git status --short
fi
echo ""

# TEST 9: Branch divergence check
echo "TEST 9: Branch Divergence Check"
echo "--------------------------------"
DIVERGENCE=$(git rev-list --left-right --count golden/golden-20251012-1043...Pristine)
echo "   Divergence: $DIVERGENCE"

if [ "$DIVERGENCE" = "0	0" ]; then
    run_test "No branch divergence" "PASS"
else
    run_test "No branch divergence" "FAIL"
fi
echo ""

# TEST 10: Commit message comparison
echo "TEST 10: Latest Commit Message"
echo "-------------------------------"
GOLDEN_MSG=$(git log golden/golden-20251012-1043 -1 --pretty=format:"%s")
PRISTINE_MSG=$(git log Pristine -1 --pretty=format:"%s")
echo "   Golden:   $GOLDEN_MSG"
echo "   Pristine: $PRISTINE_MSG"

if [ "$GOLDEN_MSG" = "$PRISTINE_MSG" ]; then
    run_test "Commit messages match" "PASS"
else
    run_test "Commit messages match" "FAIL"
fi
echo ""

# FINAL SUMMARY
echo "========================================"
echo "           TEST SUMMARY"
echo "========================================"
echo -e "${GREEN}Passed: $PASS_COUNT${NC}"
echo -e "${RED}Failed: $FAIL_COUNT${NC}"
echo "Total:  $((PASS_COUNT + FAIL_COUNT))"
echo ""

if [ $FAIL_COUNT -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL TESTS PASSED!${NC}"
    echo "✅ Pristine is an exact duplicate of golden/golden-20251012-1043"
    exit 0
else
    echo -e "${RED}⚠️  SOME TESTS FAILED!${NC}"
    echo "❌ Pristine may not be an exact duplicate"
    exit 1
fi
