#!/usr/bin/env bash
set -euo pipefail
: "${APP_DB_URL:?APP_DB_URL is required}"
echo "Running RLS smoke test against ${APP_DB_URL}"
psql "${APP_DB_URL}" -v ON_ERROR_STOP=1 -c "select current_database(), current_user"
