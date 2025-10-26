#!/bin/bash
set -e
echo "=== Setting up Booking System on macOS ==="
# Check for Python3
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 not found. Please install Python3 first:"
    echo "   brew install python"
    echo "   OR download from python.org"
    exit 1
fi
# Create virtual environment
echo "Creating virtual environment..."
python3 -m venv venv
# Activate virtual environment  
echo "Activating virtual environment..."
source venv/bin/activate
# Install dependencies
echo "Installing Python dependencies..."
pip install fastapi uvicorn psycopg2-binary python-dotenv
echo "✅ Python environment setup complete!"
echo ""
echo "Next steps:"
echo "1. Setup database: createdb booking_system"
echo "2. Set DATABASE_URL: export DATABASE_URL='postgresql://localhost:5432/booking_system'"
echo "3. Run migrations: psql \$DATABASE_URL -f migrations/001_initial_schema.sql"
echo "4. Seed data: ./scripts/seed_sample_data.sh"
echo "5. Run API: ./run.sh"
