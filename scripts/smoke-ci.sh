#!/usr/bin/env bash
set -euo pipefail

# 1) Build production assets (needed for `next start`)
pnpm -C apps/tenant-dashboard build

# 2) Start the server in background
nohup pnpm -C apps/tenant-dashboard start >/tmp/tenant-dashboard.log 2>&1 &
APP_PID=$!

# 3) Clean up on exit
cleanup() { kill "$APP_PID" 2>/dev/null || true; }
trap cleanup EXIT

# 4) Wait for health endpoint, then run the smoke test
npx wait-on -t 60000 http://localhost:3000/api/health
pnpm smoke:onboarding
