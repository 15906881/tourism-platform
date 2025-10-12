FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
ARG app=admin

FROM base AS deps
WORKDIR /app
ARG app
COPY package.json pnpm-lock.yaml* .npmrc* ./
COPY apps/$app/package.json ./apps/$app/
COPY packages/ui/package.json ./packages/ui/
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
ARG app
COPY package.json pnpm-lock.yaml* .npmrc* ./
COPY apps/$app/ ./apps/$app/
COPY packages/ ./packages/
COPY --from=deps /app/node_modules ./node_modules

RUN pnpm --filter @weblynk/ui build
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm --filter $app build

FROM base AS runner
WORKDIR /app
ARG app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/$app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/$app/.next/static ./apps/$app/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/$app/public ./apps/$app/public

USER nextjs
EXPOSE 8000
ENV PORT=8000
CMD ["node", "server.js"]
