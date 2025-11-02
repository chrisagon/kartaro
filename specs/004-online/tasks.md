# Task List: User Authentication Implementation

### Phase 1: Firebase Setup

- [ ] 1. Create a new project on the Firebase console.
- [ ] 2. In the Firebase project, enable Email/Password authentication.
- [ ] 3. In the Firebase project, create a Firestore database.
- [ ] 4. Create a new "Web App" in the Firebase project settings and copy the `firebaseConfig` object.
- [ ] 5. In project settings, go to "Service accounts" and generate a new private key (JSON file) for the backend.

### Phase 2: Backend

- [x] 6. **Install dependency:** Run `npm install firebase-admin` in the `backend` directory.
- [x] 7. **Secure credentials:** Add the content of the downloaded service account JSON to a `.env` file in the `backend` directory.
- [x] 8. **Create Firebase Admin service:** Create a new file `backend/src/services/firebaseAdmin.js` to initialize the Admin SDK with the credentials from `.env`.
- [x] 9. **Create Auth Middleware:** Create `backend/src/middleware/auth.js`. This middleware will verify the Firebase ID token from the request header.
- [x] 10. **Create Firestore service:** Add functions to `backend/src/services/GeminiService.js` (or a new service file) to save and retrieve card collections from Firestore, using the user UID.
- [x] 11. **Create new API routes:**
    - [x] `POST /api/collections`: Saves the current card collection to Firestore for the authenticated user.
    - [x] `GET /api/collections`: Retrieves the card collection for the authenticated user.
- [x] 12. **Protect existing routes:** Apply the new authentication middleware to the card generation and management routes in `backend/src/api/cards.js`.

### Phase 3: Frontend

- [x] 13. **Install dependency:** Run `npm install firebase` in the `frontend` directory.
- [x] 14. **Create Firebase config:** Create `frontend/src/firebaseConfig.ts` and add the `firebaseConfig` object from step 4.
- [x] 15. **Create AuthContext:** Create `frontend/src/context/AuthContext.tsx`. It will manage the user's authentication state and provide `login`, `logout`, and `signup` functions.
- [x] 16. **Create Login Page:** Create a new page/component `frontend/src/pages/LoginPage.tsx` with a form for email and password.
- [x] 17. **Create Register Page:** Create a new page/component `frontend/src/pages/RegisterPage.tsx` with a form for email and password.
- [x] 18. **Implement Routing:** Update the main router in `App.tsx` to handle public routes (`/login`, `/register`) and protected routes that require authentication.
- [x] 19. **Update ApiService:** Modify `frontend/src/services/ApiService.ts` to get the ID token from the authenticated user and add it to the `Authorization` header of API requests.
- [x] 20. **Integrate Auth State:** Update `ModernMainPage.tsx` to show/hide content based on whether a user is logged in. Add a logout button.
