// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-18cd2.firebaseapp.com",
  projectId: "mern-18cd2",
  storageBucket: "mern-18cd2.appspot.com",
  messagingSenderId: "1045891558167",
  appId: "1:1045891558167:web:d2112dc637020243df6552",
  measurementId: "G-NC64FN8DKQ",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
