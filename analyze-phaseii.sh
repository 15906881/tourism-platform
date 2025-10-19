#!/bin/bash

echo ========================================
echo   PHASE-II BRANCH ANALYSIS
echo ========================================
echo

echo 1. Recent commits in phase-ii:
git log phase-ii/env-cleanup-remove-backups --oneline -10

echo
echo 2. Files that would be added from phase-ii:
git diff --name-status Pristine phase-ii/env-cleanup-remove-backups | grep '^A' | head -20

echo
echo 3. Files that would be deleted from Pristine:
git diff --name-status Pristine phase-ii/env-cleanup-remove-backups | grep '^D' | head -20

echo
echo 4. Files that would be modified:
git diff --name-status Pristine phase-ii/env-cleanup-remove-backups | grep '^M' | head -20

echo
echo 5. Check project names:
echo --- Pristine package.json name:
git show Pristine:package.json | grep -m1 name

echo --- Phase-II package.json name:
git show phase-ii/env-cleanup-remove-backups:package.json | grep -m1 name

echo
echo 6. Total changes:
git diff --stat Pristine phase-ii/env-cleanup-remove-backups | tail -1
