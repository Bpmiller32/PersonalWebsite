import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const VITE_FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const VITE_FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const VITE_FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const VITE_FIREBASE_STORAGE_BUCKET = import.meta.env
  .VITE_FIREBASE_STORAGE_BUCKET;
const VITE_FIREBASE_MESSAGING_SENDER_ID = import.meta.env
  .VITE_FIREBASE_MESSAGING_SENDER_ID;
const VITE_FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Calling getAnalytics anywhere in the project causes it to be caught by iPhone content blocker
// export const analytics = getAnalytics(app);
