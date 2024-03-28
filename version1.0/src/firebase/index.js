import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_PROJECT_ID.appspot.com",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
  appId: "1:FIREBASE_MESSAGING_SENDER_ID:web:FIREBASE_APP_ID_2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
