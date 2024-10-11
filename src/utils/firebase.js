// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvT0claZ4hiURlZ6yhRiwPqsVt-mbOPtw",
  authDomain: "netflixgpt-a7004.firebaseapp.com",
  projectId: "netflixgpt-a7004",
  storageBucket: "netflixgpt-a7004.appspot.com",
  messagingSenderId: "594840112568",
  appId: "1:594840112568:web:63482c58cf554f4345134d",
  measurementId: "G-GGFTNHKQFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
