# Tasks: Création d'une application de génération de cartes

**Input**: Design documents from `/specs/001-une-application-de/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Phase 3.1: Setup
- [X] T001 Create backend and frontend project structures in the repository root.
- [X] T002 Initialize the backend as a Node.js project and install Express.
- [X] T003 Initialize the frontend as a React project using TypeScript.
- [X] T004 [P] Configure linting and formatting for the backend.
- [X] T005 [P] Configure linting and formatting for the frontend.

## Phase 3.2: Backend - Models and Services
- [X] T006 [P] Create `Card`, `CardCollection`, and `ThemeContext` models in `backend/src/models` based on `data-model.md`.
- [X] T007 Create a service in `backend/src/services` to handle the logic of interacting with the Gemini API for card generation.

## Phase 3.3: Backend - API
- [X] T008 Implement the `POST /cards/generate` endpoint in `backend/src/api/cards.js` as defined in `contracts/openapi.json`.
- [X] T009 Implement the `POST /collections` endpoint in `backend/src/api/collections.js` as defined in `contracts/openapi.json`.

## Phase 3.4: Frontend - Services
- [X] T010 Create a service in `frontend/src/services` to communicate with the backend API endpoints.

## Phase 3.5: Frontend - UI Components
- [X] T011 [P] Create a `Card` component in `frontend/src/components/Card.tsx` to display a single card.
- [X] T012 [P] Create a `CardGrid` component in `frontend/src/components/CardGrid.tsx` to display a list of cards.
- [X] T013 [P] Create a `CardEditor` component in `frontend/src/components/CardEditor.tsx` to edit a card's details.
- [X] T014 [P] Create a `CollectionManager` component in `frontend/src/components/CollectionManager.tsx` to manage card collections.
- [X] T015 [P] Create an `InputForm` component in `frontend/src/components/InputForm.tsx` for user input (theme and context).

## Phase 3.6: Frontend - Pages
- [X] T016 Create the main page in `frontend/src/pages/MainPage.tsx` that assembles all the UI components.

## Phase 3.7: Testing
- [X] T017 [P] Write unit tests for the backend models.
- [X] T018 [P] Write unit tests for the backend services.
- [X] T019 [P] Write unit tests for the frontend components.
- [X] T020 [P] Write integration tests for the API endpoints.

## Dependencies
- T001 must be done before T002 and T003.
- T006 must be done before T007.
- T007 must be done before T008.
- T010 must be done before T011, T012, T013, T014, T015.
- T011, T012, T013, T014, T015 must be done before T016.

## Parallel Example
```
# Launch T004 and T005 together:
Task: "Configure linting and formatting for the backend."
Task: "Configure linting and formatting for the frontend."

# Launch T011, T012, T013, T014, T015 together:
Task: "Create a Card component in frontend/src/components/Card.js to display a single card."
Task: "Create a CardGrid component in frontend/src/components/CardGrid.js to display a list of cards."
Task: "Create a CardEditor component in frontend/src/components/CardEditor.js to edit a card's details."
Task: "Create a CollectionManager component in frontend/src/components/CollectionManager.js to manage card collections."
Task: "Create an InputForm component in frontend/src/components/InputForm.js for user input (theme and context)."
```
