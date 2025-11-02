# Feature: User Authentication and Session Management

## 1. Overview

Implement a secure user authentication system allowing users to create accounts, log in, and maintain sessions. This is a prerequisite for saving user-specific data, such as card collections.

## 2. Functional Requirements

### 2.1. User Account Management
- **User Registration:** New users can create an account using an email and password.
- **User Login:** Registered users can log in using their credentials.
- **User Logout:** Logged-in users can end their session.
- **Password Security:** Passwords must be securely hashed before being stored.

### 2.2. Session Management
- **Session Creation:** A new session is created upon successful login.
- **Session Persistence:** Sessions should persist across browser restarts (e.g., using tokens).
- **Session Invalidation:** Sessions are destroyed upon logout.

### 2.3. Data Association
- Each user will have their own collection of cards.
- Card collections must be associated with the logged-in user's ID.
- Users can only access their own card collections.

## 3. Non-Functional Requirements

- **Security:** Use industry-standard practices for password hashing (e.g., bcrypt) and session management (e.g., JWT).

## 4. Out of Scope

- Password recovery ("Forgot Password" functionality).
- Social logins (Google, GitHub, etc.).
- User profile management (changing email, password, etc.).
- Role-based access control (Admin vs. User).

## 5. Clarifications

### Session 2025-11-01
- Q: Quelle solution d'authentification préférez-vous pour gérer les comptes utilisateurs ? → A: option C avec Firebase
- Q: Comment le backend doit-il vérifier l'identité de l'utilisateur à chaque requête API ? → A: Validation par Token (Standard)
- Q: Où devrions-nous stocker les données des collections de cartes spécifiques à chaque utilisateur ? → A: Firestore (Recommandé avec Firebase)
