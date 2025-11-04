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

This application is now containerized and can be easily deployed to:

- **Railway** (Recommended)
- **Render**
- **DigitalOcean App Platform**
- **Google Cloud Run**
- **AWS ECS**

See [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) for detailed deployment instructions.
