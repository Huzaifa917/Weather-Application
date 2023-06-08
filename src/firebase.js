// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGcgDxcbfyLn5xR1yAVkVUYiYdD9WxLok",
  authDomain: "auth-11ef8.firebaseapp.com",
  projectId: "auth-11ef8",
  storageBucket: "auth-11ef8.appspot.com",
  messagingSenderId: "103570209476",
  appId: "1:103570209476:web:bf2b5e05e9f16d9dd4a791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
