# Multi-Tenant Booking System
## Quick Start
1. **Setup Database**
```bash
createdb booking_system
export DATABASE_URL='postgresql://localhost:5432/booking_system'
psql $DATABASE_URL -f migrations/001_initial_schema.sql
./scripts/seed_sample_data.sh
```
```bash
# Use python3 on macOS
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn psycopg2-binary python-dotenv
```
