#!/bin/bash
echo 'Starting Booking System API...'

# Activate virtual environment
source venv/bin/activate

# Run the API
uvicorn src.api.main:app --reload --host 0.0.0.0 --port 8000
