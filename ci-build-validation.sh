#!/bin/bash
set -e

echo "🔧 Validating build environment..."

# Check pnpm version
pnpm -v

# Validate lockfile
pnpm install --frozen-lockfile

# Check for lockfile changes
git diff --exit-code pnpm-lock.yaml

# Build all packages
pnpm -r build

echo "✅ All build validations passed!"
