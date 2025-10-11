FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc* ./
COPY apps/site-renderer/package.json ./apps/site-renderer/
RUN ppnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm --filter site-renderer build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/site-renderer/public ./apps/site-renderer/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/site-renderer/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/site-renderer/.next/static ./apps/site-renderer/.next/static

USER nextjs
EXPOSE 3001
ENV PORT 3001
CMD ["node", "apps/site-renderer/server.js"]
