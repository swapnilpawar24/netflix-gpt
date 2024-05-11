// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLANyRKgIrjemD4EB8H6Pc1F2h4VaZJuA",
  authDomain: "netflixgpt-37995.firebaseapp.com",
  projectId: "netflixgpt-37995",
  storageBucket: "netflixgpt-37995.appspot.com",
  messagingSenderId: "767914772435",
  appId: "1:767914772435:web:918ff04af467eacdd35126",
  measurementId: "G-3PC4Q4X9W4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//we have to use this below line many times so we are putting this ]in a central place
export const auth = getAuth();
