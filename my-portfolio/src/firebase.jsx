// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCi_FyhKvbDpB9aqqVEdZnrbwGzPsKQBoQ",
  authDomain: "portfolio-7459d.firebaseapp.com",
  projectId: "portfolio-7459d",
  storageBucket: "portfolio-7459d.firebasestorage.app",
  messagingSenderId: "459074828105",
  appId: "1:459074828105:web:0c53e8eaa13681cd790c98",
  measurementId: "G-CC09HNWWHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };