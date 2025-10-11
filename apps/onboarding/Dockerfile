FROM node:18-alpine AS base
ARG APP=onboarding
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc* ./
COPY apps/onboarding/package.json ./apps/onboarding/
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm -C apps/${APP} build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/onboarding/public ./apps/onboarding/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/onboarding/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/onboarding/.next/static ./apps/onboarding/.next/static

USER nextjs
EXPOSE 3003
ENV PORT 3003
CMD ["node", "apps/onboarding/server.js"]
