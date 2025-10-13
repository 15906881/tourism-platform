#!/bin/bash
set -e

echo '🚀 RUNNING CI TEST SUITE'
echo '========================'

# Run environment smoke test
echo '1. Running environment smoke test...'
./scripts/test/env-smoke-test.sh

echo ''
echo '✅ ALL CI TESTS COMPLETED SUCCESSFULLY'
