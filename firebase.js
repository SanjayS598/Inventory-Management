// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBparVb41QjTwLPyJsZL9eCxptMVnhi1Qg",
  authDomain: "inventory-managment-8f115.firebaseapp.com",
  projectId: "inventory-managment-8f115",
  storageBucket: "inventory-managment-8f115.appspot.com",
  messagingSenderId: "1037794191050",
  appId: "1:1037794191050:web:4d0662f559814aa198b633",
  measurementId: "G-SWJFZCKYPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};