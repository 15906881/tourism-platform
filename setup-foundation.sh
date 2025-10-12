#!/bin/bash
set -e

echo "🚀 Setting up Tourism Platform Foundation..."

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build packages using turbo (more reliable than pnpm --filter)
echo "🏗️ Building packages..."
pnpm build

# Start admin in development mode
echo "👨‍💼 Starting admin dashboard..."
pnpm -C apps/admin dev
