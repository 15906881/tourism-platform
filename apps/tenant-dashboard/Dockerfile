FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc* ./
COPY apps/tenant-dashboard/package.json ./apps/tenant-dashboard/
RUN ppnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm --filter tenant-dashboard build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/tenant-dashboard/public ./apps/tenant-dashboard/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/tenant-dashboard/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/tenant-dashboard/.next/static ./apps/tenant-dashboard/.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "apps/tenant-dashboard/server.js"]
