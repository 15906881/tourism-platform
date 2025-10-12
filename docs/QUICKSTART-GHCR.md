# Run prebuilt images (GHCR)

```bash
docker compose -f docker-compose.ghcr.yml up -d
curl -s http://localhost:8000/health
```

## Stop containers
```bash
docker compose -f docker-compose.ghcr.yml down
```
