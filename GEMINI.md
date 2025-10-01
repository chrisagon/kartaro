# Project Overview

This is a full-stack web application designed for workshop facilitators to generate and manage decks of cards for their sessions. The application allows users to define a theme and context, and then automatically generates a set of categorized cards. Users can customize these cards and save them into collections for future use.

The application is divided into two main parts:

*   **Frontend:** A React application built with Create React App and written in TypeScript. It provides the user interface for creating, customizing, and managing card collections.
*   **Backend:** A Node.js application built with Express. It handles the logic for generating cards, likely by using the Google Generative AI SDK to interact with a Gemini model.

# Building and Running

## Frontend

To run the frontend development server:

```bash
cd frontend
npm install
npm start
```

To run the frontend tests:

```bash
cd frontend
npm test
```

To build the frontend for production:

```bash
cd frontend
npm run build
```

## Backend

To run the backend server:

```bash
cd backend
npm install
npm start
```

To run the backend tests:

```bash
cd backend
npm test
```

**TODO:** The `start` script is missing from the `backend/package.json`. This needs to be added. A likely command would be `node src/index.js`.

# Development Conventions

*   **Code Style:** The project uses Prettier for code formatting. It is recommended to set up your editor to format on save.
*   **Linting:** The project uses ESLint to enforce code quality. You can run the linter with `npm run lint` in both the `frontend` and `backend` directories. **TODO:** The `lint` script is missing from the `package.json` files. This needs to be added.
*   **Testing:** Both the frontend and backend have a test suite using Jest. All new features should be accompanied by tests.
*   **Branching:** The `spec.md` file indicates a feature branch naming convention of `<issue-number>-<short-description>`. This should be followed for all new features.
