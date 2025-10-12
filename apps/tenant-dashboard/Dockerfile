# --- Build base
FROM node:18-bullseye AS base
WORKDIR /app
RUN corepack enable

# Copy only what's needed for a deterministic, workspace-aware install
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY tsconfig.base.json turbo.json ./
COPY .eslintrc.json .eslintignore .prettierrc.json .prettierignore ./
COPY packages ./packages
COPY apps/tenant-dashboard ./apps/tenant-dashboard

# --- Install
FROM base AS deps
RUN pnpm install --frozen-lockfile

# --- Build shared/workspace packages that app imports
FROM deps AS build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm --filter @weblynk/ui build
RUN pnpm --filter @weblynk/server build
RUN pnpm --filter @weblynk/db build
RUN pnpm --filter @weblynk/blocks build
RUN pnpm --filter @weblynk/templates build
# Build the app (produces .next/standalone when output:'standalone' is set)
RUN pnpm -C apps/tenant-dashboard build

# --- Runtime (copy standalone bundle)
FROM node:18-bullseye AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Copy the entire standalone output
COPY --from=build /app/apps/tenant-dashboard/.next/standalone ./

# Start Next's standalone server - CORRECT PATH
CMD ["node", "apps/tenant-dashboard/server.js"]
