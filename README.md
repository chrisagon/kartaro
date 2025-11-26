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
-   **Credit-based Usage (feature 005):** Optional credit system that controls image generation and collection saves (PDF exports in the default UI are generated on the frontend and are free from a credit perspective) with an initial free quota and admin-managed adjustments.

## Credit-based usage & billing (backend)

The credit system is implemented in the feature branch `005-implement-a-credit` and enforced entirely on the backend.

### Business rules

> Note: In the current Fresquia UI, PDFs are generated entirely on the frontend and do not consume credits, even though the backend defines optional pricing rules for PDF export.

- **Initial quota**
  - New users are created with **50 credits**.
- **Image generation**
  - 1 credit covers up to **8 images**.
  - Required credits: `ceil(imageCount / 8)`.
- **Collection save**
  - Anchored on **10 credits for 52 cards**.
  - Required credits: `ceil(cardsCount * (10 / 52))`.
- **PDF export**
  - **Free** for `cardsCount 16` (0 credits).
  - **Paid** for `cardsCount > 16` → **2 credits**.
- If the user does not have enough credits, the backend **blocks** the action and returns:
  - `402` with `{ error: 'Not enough credits', code: 'INSUFFICIENT_CREDITS' }`.

### Persistence & services

- SQLite `users` table extended with:
  - `credits_balance`, `total_images_generated`, `total_cards_generated`,
    `total_collections_saved`, `total_pdfs_exported`, `total_credits_spent`,
    `last_activity_at`.
- New table `credit_transactions` logs each change:
  - `type` (`earn` | `spend` | `adjust`), `source`, signed `credits`, JSON `payload`, `created_at`.
- Core helpers in `backend/src/services/LocalDatabaseService.js`:
  - `getUserUsage(userId)` – returns current balance + aggregated counters.
  - `applyCreditChangeAndUsage(userId, options)` – atomic credit check, balance update, counters, and transaction log.
  - `getUserCreditTransactions(userId, options)` – paginated transaction history.
  - `applyAdminCreditAdjustment(userId, options)` – admin-only manual credit adjustments.
- Pure pricing rules in `backend/src/services/CreditService.js`:
  - `creditsRequiredForImages(imageCount)`
  - `creditsRequiredForCollectionSave(cardsCount)`
  - `creditsRequiredForPdf(cardsCount)`

### API endpoints

- **User usage summary**
  - `GET /api/users/me/usage`
  - Authenticated; returns:
    - `creditsBalance`, `totalImagesGenerated`, `totalCardsGenerated`,
      `totalCollectionsSaved`, `totalPdfsExported`, `totalCreditsSpent`.
- **Admin credit management**
  - `POST /api/admin/users/:userId/credits/adjust`
  - `GET /api/admin/users/:userId/credit-transactions`
  - Access controlled via `ADMIN_USER_IDS` environment variable
    (comma-separated list of admin user IDs).
- **Credit enforcement is integrated into existing routes**
  - Image generation routes in `backend/src/api/cards.js`.
  - Collection save + collection PDF routes in `backend/src/api/collections.js`.

### Tests

The credit system is covered by Jest tests in `backend/tests/`:

- `credits.rules.test.js` – unit tests for pricing rules.
- `credits.db.test.js` – schema + persistence + helper behaviour.
- `credits.api.test.js` – contract tests for user/admin credit endpoints.
- `credits.integration.test.js` – end-to-end flows (generation, blocking on insufficient credits).

For detailed design, see the feature docs in `specs/005-implement-a-credit/`.

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
