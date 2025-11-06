# Render Deployment Guide

This guide explains how to deploy the Decklab backend to [Render](https://render.com) using the Node.js Web Service runtime defined in `render.yaml`.

## 1. Prerequisites

- A Render account with billing enabled (Starter plan or higher is required for persistent disks).
- The Decklab repository accessible from Render (GitHub, GitLab or Bitbucket).
- Environment variables and API keys prepared (Gemini, Stability, Firebase, etc.).
- SQLite database migration requirements identified if you are upgrading from a different storage path.

## 2. Repository Preparation

1. Update your feature branch with the latest changes from `master`.
2. Ensure the following files are committed:
   - `render.yaml` (Node.js runtime configuration)
   - Updated backend entrypoint (`backend/src/index.js`)
   - Environment example file (`backend/.env.example`)
   - This document (`RENDER_DEPLOYMENT.md`) and `README.md`
3. Push the branch to your remote repository.

## 3. Render Blueprint Overview

`render.yaml` declares a single Web Service:

- **Runtime**: Node
- **Root directory**: `backend`
- **Build command**: `npm install`
- **Start command**: `npm run start`
- **Health check**: `GET /healthz`
- **Persistent disk**: `backend-data` mounted at `/opt/render/project/data`

Render automatically provisions this service when you create a Blueprint deploy.

### What about the frontend?

The Render blueprint only spins up the backend API. You have two ways to expose the React frontend:

1. **Render Static Site (recommended)**
   - In the Render dashboard, create a new **Static Site** service pointing to `frontend/`.
   - Build command: `npm install && npm run build`
   - Publish directory: `build`
   - Configure the environment variable `REACT_APP_API_BASE_URL` (ou équivalent) pour pointer vers l’URL publique du backend.
   - Optionnel : utilisez les scripts `build-frontend.sh` / `.bat` comme référence pour les étapes de build.

2. **External hosting** (Firebase Hosting, Netlify, Vercel…)
   - Exécuter localement `npm install` puis `npm run build` dans `frontend/`.
   - Déployer le dossier `build/` sur la plateforme choisie.
   - Mettre à jour la configuration CORS (`ALLOWED_ORIGINS`) et `FRONTEND_BASE_URL` côté backend pour inclure ce domaine.

> ℹ️ Le backend n’embarque pas automatiquement le build frontend. Toute mise en production nécessite donc un service de hosting statique séparé.

## 4. Create the Render Service

1. Sign in to the Render dashboard.
2. Click **New → Blueprint** and connect the Decklab repository.
3. Select the branch containing the latest deployment changes.
4. Confirm the detected Web Service (`decklab-backend`) and Starter plan.
5. Click **Create Resources**. Render queues the first build automatically.

## 5. Configure Environment Variables

Populate the following variables in the Render dashboard (Values column is illustrative):

| Variable | Required | Description | Example |
| --- | --- | --- | --- |
| `NODE_ENV` | Yes | Runtime mode | `production` |
| `PORT` | Auto | Render injects the port; Express uses `process.env.PORT` |
| `DATABASE_PATH` | Yes | SQLite database location on the Render disk | `/opt/render/project/data/database.sqlite` |
| `GEMINI_API_KEY` | Yes | Gemini API key | `***` |
| `STABILITY_API_KEY` | Optional | Stability AI key for images | `***` |
| `FIREBASE_PROJECT_ID` | Optional | Firebase project identifier | `decklab-prod` |
| `ALLOWED_ORIGINS` | Yes | Comma-separated list of allowed origins for CORS | `https://decklab.onrender.com,https://decklab.app` |
| `BACKEND_BASE_URL` | Yes | Public backend URL (trailing slash) | `https://decklab.onrender.com/` |
| `FRONTEND_BASE_URL` | Yes | Public frontend URL (trailing slash) | `https://decklab.app/` |
| `PDF_ASSET_BASE_URL` | Optional | Override asset base for PDF rendering | leave empty |
| `IMAGE_PROVIDER` | Yes | Image provider selector | `stability` |
| `GEMINI_TEXT_MODEL` | Optional | Gemini model name | `gemini-2.5-flash-lite` |
| `STABILITY_MODEL` | Optional | Stability model name | `stable-diffusion-xl-1024-v1-0` |
| `NUM_CARDS_TO_GENERATE` | Optional | Default number of cards | `20` |
| `IMAGE_DELAY_MS` | Optional | Delay between image requests | `1000` |
| `REQUEST_LIMIT` | Optional | Body-parser size limit | `500mb` |
| `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` | Yes | Skip bundled Chromium download | `true` |
| `PUPPETEER_EXECUTABLE_PATH` | Yes | Path to Chromium installed on Render | `/usr/bin/chromium` |

> ℹ️ Render automatically sets `PORT`. Do **not** hardcode it in the dashboard.

## 6. Persistent Disk Setup

- The disk named `backend-data` is defined in `render.yaml` with mount path `/opt/render/project/data`.
- Verify the disk is attached after the service is created. New builds reuse the same disk content.
- If migrating existing data, upload your SQLite file to the disk via `render-cli` or a one-off job.

## 7. Post-Deployment Verification

After the first successful build:

1. Open the service logs to confirm the server listens on the Render-provided port.
2. Check the health endpoint: `GET https://<service-domain>/healthz` should return `{ "status": "ok" }`.
3. Test the primary endpoints:
   - `POST /api/auth/login`
   - `POST /api/cards/generate`
   - `GET /api/collections/:id/pdf`
4. Trigger a PDF export to confirm Puppeteer can fetch assets via the public URLs.

## 8. Updating the Service

- Push new commits to the tracked branch; Render rebuilds automatically.
- Use feature branches for upcoming work, merge into the deployment branch when stable.
- Consider enabling auto-deploys only on main branches that pass your CI/tests.

## 9. Troubleshooting

| Symptom | Potential Cause | Resolution |
| --- | --- | --- |
| Build fails during Puppeteer install | Chromium binary download attempted | Ensure `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` |
| PDFs show missing images | Base URLs still pointing to `localhost` | Update `BACKEND_BASE_URL` / `FRONTEND_BASE_URL` and redeploy |
| 403 due to CORS | Missing origin in `ALLOWED_ORIGINS` | Add the domain to the comma-separated list and redeploy |
| SQL errors or missing data | Disk not mounted or `DATABASE_PATH` incorrect | Confirm disk attachment and environment variable value |

## 10. Next Steps

- Update `TASK_LIST.md` and commit documentation changes when the deployment is verified.
- Monitor service metrics in Render and adjust plan or autoscaling if usage grows.
