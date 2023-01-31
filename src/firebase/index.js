import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcpunVV2GrRmGHWufeDXK4FrzOQVE3GM4",
  authDomain: "bpmillerpersonalwebsite.firebaseapp.com",
  projectId: "bpmillerpersonalwebsite",
  storageBucket: "bpmillerpersonalwebsite.appspot.com",
  messagingSenderId: "753668675702",
  appId: "1:753668675702:web:09c63441e63dabb4e6a757",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
