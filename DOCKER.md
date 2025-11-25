# Docker Setup Guide

## Prerequisites
- Docker installed
- Docker Compose installed

## Environment Setup

Create `.env` file in root:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

## Development

### Start Dev Server
```bash
docker-compose up dev
```
Access: `http://localhost:5173`

### Run in Background
```bash
docker-compose up -d dev
```

### View Logs
```bash
docker-compose logs -f dev
```

### Stop
```bash
docker-compose down
```

---

## Production

### Build with Environment Variables

**Important:** Environment variables are embedded at build time for production builds.

#### Option 1: Using .env file (Recommended)
Ensure your `.env` file exists with required variables, then build:
```bash
docker-compose up --build prod
```

#### Option 2: Passing variables via command line
```bash
docker-compose build prod --build-arg VITE_SUPABASE_URL=your_url --build-arg VITE_SUPABASE_ANON_KEY=your_key
docker-compose up prod
```

#### Option 3: Using docker build directly

**Bash/Linux:**
```bash
docker build \
  --build-arg VITE_SUPABASE_URL=your_url \
  --build-arg VITE_SUPABASE_ANON_KEY=your_key \
  -f Dockerfile \
  -t company-site-prod .

docker run -p 8080:80 company-site-prod
```

**PowerShell:**
```powershell
docker build `
  --build-arg VITE_SUPABASE_URL=your_url `
  --build-arg VITE_SUPABASE_ANON_KEY=your_key `
  -f Dockerfile `
  -t company-site-prod .

docker run -p 8080:80 company-site-prod
```

**Command Prompt:**
```cmd
docker build --build-arg VITE_SUPABASE_URL=your_url --build-arg VITE_SUPABASE_ANON_KEY=your_key -f Dockerfile -t company-site-prod .

docker run -p 8080:80 company-site-prod
```

### Start Production Server
```bash
docker-compose up prod
```
Access: `http://localhost:8080`

### Run in Background
```bash
docker-compose up -d prod
```

---

## Useful Commands

### View Running Containers
```bash
docker ps
```

### Execute Command in Container
```bash
docker-compose exec dev sh
```

### Clean Up Everything
```bash
docker-compose down --rmi all -v
docker system prune -a
```

### Rebuild from Scratch
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up
```

---

## Troubleshooting

**Port already in use:**
```bash
# Change port in docker-compose.yml or kill existing process
docker-compose down
```

**Changes not reflecting:**
```bash
docker-compose restart dev
```

**Container won't start:**
```bash
docker-compose logs dev
docker-compose build --no-cache dev
```

---

## Ports
- Development: `5173`
- Production: `8080`
