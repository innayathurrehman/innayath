// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvdSQQBYjlo9mqJu2Yn5pUzMWr5NOq7RM",
  authDomain: "inayath-26.firebaseapp.com",
  projectId: "inayath-26",
  storageBucket: "inayath-26.appspot.com",
  messagingSenderId: "735226790822",
  appId: "1:735226790822:web:c8aa6b35b32d9a67d48567",
  measurementId: "G-C23HKDK4JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
