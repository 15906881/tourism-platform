# Quickstart

This repo can run in two modes: **local dev** (hot reload) and **Docker compose** (prod-like).

## Prereqs
- Node 20 (see `.nvmrc`)
- Docker Desktop
- Git

---

## Local dev (hot reload)

### 1) API
```bash
cd api
npm install
echo -e "PORT=8000\nNODE_ENV=development" > .env
npm run dev   # nodemon
# Verify: http://localhost:8000/health
```

### 2) Web (separate terminal)
```bash
cd web
npm install
VITE_API_BASE_URL=http://localhost:8000 npm run dev
# App at http://localhost:5173 (or 5174+ if busy)
```

---

## Docker compose (prod-like)

```bash
# from repo root
docker compose up --build
# Web → http://localhost:8080
# API → http://localhost:8000/health
```

---

## Troubleshooting

**Port conflicts**
```bash
# Kill process on specific port
lsof -nP -iTCP:8000 -sTCP:LISTEN | awk 'NR>1 {print $2}' | xargs kill -9
```

**Clean Docker restart**
```bash
docker compose down -v && docker compose up --build
```
