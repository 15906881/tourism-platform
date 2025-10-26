#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT"

export DATABASE_URL="${DATABASE_URL:-postgresql://sadeshibeshi@localhost:5432/booking_system}"

# create venv if missing
[ -d "venv" ] || python3 -m venv venv
source venv/bin/activate

# install deps if uvicorn missing
command -v uvicorn >/dev/null 2>&1 || {
  echo "Installing dependencies..."
  pip install uvicorn fastapi asyncpg python-dotenv pytz python-dateutil
}

echo "Starting Booking System API..."
exec python -m uvicorn booking_system.src.api.main:app --reload --host 0.0.0.0 --port 8000
