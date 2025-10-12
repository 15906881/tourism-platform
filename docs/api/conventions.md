# API Conventions

## Base URL
- Development: `http://localhost:8000/api/v1`
- Production: `https://api.weblynk.app/v1`

## Authentication
Bearer token required for authenticated endpoints.

## Response Format
Success returns data object. Errors return error object with code and message.
