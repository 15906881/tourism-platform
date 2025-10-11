# syntax=docker/dockerfile:1

############################
# Dependencies (prod-only) #
############################
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

#############
# Runtime   #
#############
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

# System certs + wget for healthcheck and CA download
RUN apk add --no-cache ca-certificates wget

# Fetch the AWS RDS global trust bundle and place it with system certs
# (kept separate so we can point Node at it explicitly)
RUN wget -q https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem \
      -O /etc/ssl/certs/rds-global-bundle.pem \
  && chmod 0644 /etc/ssl/certs/rds-global-bundle.pem

# Tell Node to extend its trust store with the RDS bundle
# (Node will still use system CAs; this just adds RDS CA chain explicitly)
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/rds-global-bundle.pem

# App files
COPY --from=deps /app/node_modules ./node_modules
COPY api ./api
COPY database ./database
COPY scripts ./scripts

# Ensure the non-root 'node' user can read the app and CA bundle
RUN chown -R node:node /app /etc/ssl/certs/rds-global-bundle.pem
USER node

EXPOSE 3000

# Healthcheck: pass only when /health returns JSON with "ok": true
HEALTHCHECK --start-period=45s --interval=15s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/health | grep -q '"ok":true' || exit 1

CMD ["node", "api/server.js"]
