// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-fusion-lab-dc51d.firebaseapp.com",
  projectId: "ai-fusion-lab-dc51d",
  storageBucket: "ai-fusion-lab-dc51d.firebasestorage.app",
  messagingSenderId: "411426876425",
  appId: "1:411426876425:web:e532ec6caa68a62b131cd8",
  measurementId: "G-WZYN03XZTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app ,'ai-fusion-lab');
