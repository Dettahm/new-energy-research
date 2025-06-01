// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlpTtwNCrHV59zsIzYvYPHNkgkOzqWtks",
  authDomain: "kewirausahaanbisnisdandigital.firebaseapp.com",
  projectId: "kewirausahaanbisnisdandigital",
  storageBucket: "kewirausahaanbisnisdandigital.firebasestorage.app",
  messagingSenderId: "896582727450",
  appId: "1:896582727450:web:59126f4f7644d522ca9ea3",
  measurementId: "G-PG9NTZYP9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);