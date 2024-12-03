// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsmoYNd9w_nVNhJQSsE86-9nChZCrhnsc",
  authDomain: "littlelegendsbooks-d07f6.firebaseapp.com",
  projectId: "littlelegendsbooks-d07f6",
  storageBucket: "littlelegendsbooks-d07f6.firebasestorage.app",
  messagingSenderId: "498624005213",
  appId: "1:498624005213:web:c4bb319b042c4593aff9b4",
  measurementId: "G-MN2FC77Q1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);