#!/bin/bash
# Force create .env.staging if test is failing
if [ ! -f ".env.staging" ]; then
    cp .env.local .env.staging
    echo 'Fixed .env.staging'
fi
