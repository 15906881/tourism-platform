FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc* ./
COPY apps/photos-entry/package.json ./apps/photos-entry/
RUN ppnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm --filter photos-entry build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/photos-entry/public ./apps/photos-entry/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/photos-entry/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/photos-entry/.next/static ./apps/photos-entry/.next/static

USER nextjs
EXPOSE 3004
ENV PORT 3004
CMD ["node", "apps/photos-entry/server.js"]
