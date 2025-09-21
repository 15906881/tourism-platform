# syntax=docker/dockerfile:1
# Build deps
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
# Runtime
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY api ./api
COPY database ./database
COPY scripts ./scripts
EXPOSE 3000
CMD ["node", "api/server.js"]

