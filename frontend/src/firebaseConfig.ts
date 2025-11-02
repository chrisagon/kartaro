import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbNmc2cKcE0kTOEUE4SsUqduEZgBiPO3c",
  authDomain: "decklab-b70b8.firebaseapp.com",
  projectId: "decklab-b70b8",
  storageBucket: "decklab-b70b8.appspot.com",
  messagingSenderId: "758065927787",
  appId: "1:758065927787:web:1679cf499b09365179832e",
  measurementId: "G-YGB19G7N5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
