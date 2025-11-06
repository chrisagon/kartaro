# AI Card Generator

This is a full-stack web application that allows users to generate, save, and export AI-powered learning cards.

## 🚀 Quick Start with Docker (Recommended)

The easiest way to run this application is using Docker:

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd fresquia-local

# 2. Configure environment variables
cp backend/.env.example backend/.env
# Edit backend/.env with your API keys

# 3. Start with Docker
docker-deploy.bat start

# Or manually:
docker-compose up --build
```

The API will be available at `http://localhost:3001`.

**For detailed Docker instructions, see [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md)**

## Features

-   **AI Card Generation:** Generate learning cards based on a given theme and context.
-   **Save Collections:** Save generated cards into collections for later use.
-   **PDF Export:** Export card collections as a PDF file.
-   **Modern UI:** A sleek and intuitive user interface for a seamless user experience.

## Technologies Used

### Frontend

-   **React:** A JavaScript library for building user interfaces.
-   **Material-UI:** A popular React UI framework.
-   **TypeScript:** A typed superset of JavaScript.
-   **axios:** A promise-based HTTP client for the browser and Node.js.
-   **jspdf** and **html2canvas**: Libraries for generating PDFs.

### Backend

-   **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
-   **Express:** A fast, unopinionated, minimalist web framework for Node.js.
-   **SQLite:** Local database for data persistence.
-   **Vertex AI:** Google Cloud's AI platform for building, deploying, and scaling machine learning models.
-   **Puppeteer:** A Node.js library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.

## Traditional Setup (Development)

### Prerequisites

-   Node.js (version 16+)
-   npm

### Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ai-card-generator.git
    cd ai-card-generator
    ```
2.  **Set up the backend:**
    ```bash
    cd backend
    npm install
    cp .env.example .env
    # Add your API keys and other configurations to the .env file
    ```
3.  **Set up the frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start the backend:**
    ```bash
    cd backend
    node src/index.js
    ```
    The backend server will be running on `http://localhost:3001`.
2.  **Start the frontend:**
    ```bash
    cd ../frontend
    npm start
    ```
    The frontend development server will open in your browser at `http://localhost:3000`.

## Deployment

### Production Deployment

#### Render (Web Service Node.js)

1. **Push les modifications** vers votre dépôt Git (branch de feature recommandée, voir règles globales).
2. **Créer un service Blueprint** sur [Render](https://dashboard.render.com) en pointant sur le dépôt.
3. Render détecte automatiquement `render.yaml` et configure un Web Service Node.
4. **Vérifier/compléter les variables d’environnement** dans le Dashboard :
   - `GEMINI_API_KEY`, `STABILITY_API_KEY`, `FIREBASE_PROJECT_ID`
   - `ALLOWED_ORIGINS` (par ex. `https://decklab.onrender.com,https://decklab.app`)
   - `BACKEND_BASE_URL` (URL publique Render, terminer par `/`)
   - `FRONTEND_BASE_URL` (URL publique du frontend, terminer par `/`)
   - Facultatif : `PDF_ASSET_BASE_URL`, `NUM_CARDS_TO_GENERATE`, `IMAGE_DELAY_MS`, `REQUEST_LIMIT`
   - Puppeteer : `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`, `PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium`
5. **Disque persistant** : Render crée automatiquement le disque `backend-data` défini dans `render.yaml`. Les données SQLite seront stockées dans `/opt/render/project/data/database.sqlite`.
6. **Déployer** et vérifier le health-check sur `/healthz`.

#### Autres plateformes

L’application reste compatible avec Railway, DigitalOcean App Platform, Google Cloud Run ou AWS ECS grâce aux scripts Docker existants. Reportez-vous à [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) pour les instructions spécifiques.
