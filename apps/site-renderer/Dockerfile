# syntax=docker/dockerfile:1.7
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-bullseye AS builder
WORKDIR /repo

# Enable corepack for pnpm
RUN corepack enable

# Copy package files for optimal layer caching
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages/*/package.json packages/*/
COPY apps/*/package.json apps/*/

# Pre-fetch dependencies to cache
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm fetch

# Copy entire codebase
COPY . .

# Generate Prisma client if needed
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm -r prisma generate 2>/dev/null || echo "Prisma not needed"

# Build arguments
ARG APP
ARG NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

# Build the specific app
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install -r --offline --frozen-lockfile && \
    pnpm -C apps/${APP} build
