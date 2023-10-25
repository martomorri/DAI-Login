// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firestore from '@react-native-firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD41FqYWlvl6ZT6Nc_yhq20lghkt-NXZC8",
  authDomain: "dai-login-9da28.firebaseapp.com",
  projectId: "dai-login-9da28",
  storageBucket: "dai-login-9da28.appspot.com",
  messagingSenderId: "77048114860",
  appId: "1:77048114860:web:8442f361f6839a7ba2b909",
  measurementId: "G-924QZS3D6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);