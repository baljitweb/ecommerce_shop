// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0-hzEvszrR96f4LAsEEORR86hCwfrVIw",
  authDomain: "ecommerceinreact.firebaseapp.com",
  projectId: "ecommerceinreact",
  storageBucket: "ecommerceinreact.appspot.com",
  messagingSenderId: "95704800208",
  appId: "1:95704800208:web:72c5d43ab4ca484a72b7d5",
  measurementId: "G-T54V9DH5L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseDB = getFirestore(app);

export default firebaseDB;