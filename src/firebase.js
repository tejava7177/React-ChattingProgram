// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkYlf5fl99pSIl4TvRxFySz9M6ZVLj7l8",
    authDomain: "react-firebase-chat-app-4aac7.firebaseapp.com",
    projectId: "react-firebase-chat-app-4aac7",
    storageBucket: "react-firebase-chat-app-4aac7.appspot.com",
    messagingSenderId: "451724740139",
    appId: "1:451724740139:web:47ffcc34df16fe41378c6e",
    measurementId: "G-01XZR0NRXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);