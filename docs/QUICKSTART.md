# Quickstart

## Local dev

### API
```bash
cd api
npm install
echo -e "PORT=8000\nNODE_ENV=development" > .env
npm run dev   # nodemon; http://localhost:8000/health

[200~# 1. First, abort the stuck heredoc
# Press Ctrl+C in your terminal to exit the heredoc

# 2. Then run this complete block:
cd ~/tourism-platform
git checkout docs/quickstart

cat > docs/QUICKSTART.md <<'MD'
# Quickstart

## Local dev

### API
```bash
cd api
npm install
echo -e "PORT=8000\nNODE_ENV=development" > .env
npm run dev   # nodemon; http://localhost:8000/health
```

### Web (Vite)
```bash
cd web
npm install
VITE_API_BASE_URL=http://localhost:8000 npm run dev
# App at http://localhost:5173 (or 5174+ if busy)
```

## Docker (compose)
```bash
# from repo root
docker compose up --build
# Web → http://localhost:8080
# API → http://localhost:8000/health
```

## Lint & format
```bash
npm run lint:all
npm run format:all
```

## Troubleshooting

**Port 8000 already in use**
```bash
lsof -nP -iTCP:8000 -sTCP:LISTEN | awk 'NR>1 {print $2}' | xargs kill -9
```

**Rebuild containers from scratch**
```bash
docker compose down -v && docker compose up --build
```
