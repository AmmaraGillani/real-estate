// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e05a1.firebaseapp.com",
  projectId: "real-estate-e05a1",
  storageBucket: "real-estate-e05a1.appspot.com",
  messagingSenderId: "731562882500",
  appId: "1:731562882500:web:b2b116c6f59a04c9e26091"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);