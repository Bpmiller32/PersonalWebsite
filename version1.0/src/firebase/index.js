import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const OLD_VITE_FIREBASE_API_KEY = import.meta.env.OLD_VITE_FIREBASE_API_KEY;
const OLD_VITE_FIREBASE_AUTH_DOMAIN = import.meta.env
  .OLD_VITE_FIREBASE_AUTH_DOMAIN;
const OLD_VITE_FIREBASE_PROJECT_ID = import.meta.env
  .OLD_VITE_FIREBASE_PROJECT_ID;
const OLD_VITE_FIREBASE_STORAGE_BUCKET = import.meta.env
  .OLD_VITE_FIREBASE_STORAGE_BUCKET;
const OLD_VITE_FIREBASE_MESSAGING_SENDER_ID = import.meta.env
  .OLD_VITE_FIREBASE_MESSAGING_SENDER_ID;
const OLD_VITE_FIREBASE_APP_ID = import.meta.env.OLD_VITE_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: OLD_VITE_FIREBASE_API_KEY,
  authDomain: OLD_VITE_FIREBASE_AUTH_DOMAIN,
  projectId: OLD_VITE_FIREBASE_PROJECT_ID,
  storageBucket: OLD_VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: OLD_VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: OLD_VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
