# Implementation Plan: User Authentication with Firebase

This document outlines the technical plan to integrate Firebase Authentication and Firestore into the application.

## Phase 1: Firebase Project Setup

1.  **Create Firebase Project:** A new project will be created on the Firebase console.
2.  **Enable Services:**
    *   **Firebase Authentication:** Enable the "Email/Password" sign-in provider.
    *   **Firestore Database:** Create a new Firestore database to store user-specific data.
3.  **Get Credentials:**
    *   **Frontend:** Obtain the Firebase configuration object (apiKey, authDomain, etc.) for the web app.
    *   **Backend:** Generate a private key (service account JSON file) for the Firebase Admin SDK.

## Phase 2: Backend Integration

1.  **Install Dependencies:** Add the `firebase-admin` package to the backend.
2.  **Initialize Admin SDK:** Create a service to initialize the Firebase Admin SDK using the service account credentials. This will be done once when the server starts.
3.  **Authentication Middleware:**
    *   Create a middleware for Express.js.
    *   This middleware will intercept incoming requests, extract the Firebase ID Token from the `Authorization` header, and verify it using the Admin SDK.
    *   If the token is valid, the user's decoded information (like UID) will be attached to the request object (e.g., `req.user`).
4.  **Firestore Service:**
    *   Create service functions to interact with Firestore (e.g., `saveCollection`, `getCollection`).
    *   These functions will use the user's UID to read/write data from a `collections` collection in Firestore, ensuring data isolation.
5.  **Update API Endpoints:**
    *   **Secure Routes:** Apply the authentication middleware to all routes that require a logged-in user (e.g., generating cards, saving collections).
    *   **Create New Routes:** Implement new endpoints (`POST /api/collections`, `GET /api/collections`) that use the Firestore service to manage user card collections.

## Phase 3: Frontend Integration

1.  **Install Dependencies:** Add the `firebase` package to the frontend.
2.  **Firebase Configuration:** Create a configuration file (`firebaseConfig.ts`) to initialize the Firebase app with the credentials obtained in Phase 1.
3.  **Authentication Context:**
    *   Create a React Context (`AuthContext`) to manage the global authentication state (e.g., current user, loading state).
    *   This context will provide functions for `login`, `signup`, and `logout`.
4.  **UI Components:**
    *   Create components for **Login** and **Registration** forms.
    *   Create a **protected route** component that redirects unauthenticated users to the login page.
5.  **Update Application Flow:**
    *   Modify the main application component (`App.tsx` or `ModernMainPage.tsx`) to display either the authentication forms or the main application based on the user's login status.
    *   Integrate the `logout` function into a button in the UI.
6.  **API Service Integration:**
    *   Update the `ApiService` to automatically get the current user's ID Token and include it in the `Authorization` header for all relevant API calls.
