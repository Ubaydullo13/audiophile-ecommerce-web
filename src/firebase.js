// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCltjGQNtMKfIKNgrExnzgtErYUZrjgy34",
  authDomain: "audiophile-2ca0d.firebaseapp.com",
  projectId: "audiophile-2ca0d",
  storageBucket: "audiophile-2ca0d.appspot.com",
  messagingSenderId: "798359602300",
  appId: "1:798359602300:web:9b8d438584e2e87b44f5f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
