#!/usr/bin/env bash
set -euo pipefail

nohup pnpm -C apps/tenant-dashboard start >/tmp/tenant-dashboard.log 2>&1 &
APP_PID=$!

cleanup() { kill "$APP_PID" 2>/dev/null || true; }
trap cleanup EXIT

npx wait-on -t 60000 http://localhost:3000/api/health
pnpm smoke:onboarding
