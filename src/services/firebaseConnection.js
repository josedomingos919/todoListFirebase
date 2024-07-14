// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as RNFirebaseAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADMCqi70EYiOoHezTxzKZNcq6WLWl7RQk",
  authDomain: "app-tarefas-react-native.firebaseapp.com",
  projectId: "app-tarefas-react-native",
  storageBucket: "app-tarefas-react-native.appspot.com",
  messagingSenderId: "15723610397",
  appId: "1:15723610397:web:ee50daed63658a5df121f4",
  measurementId: "G-E74MJJFK2F",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = RNFirebaseAuth.getAuth(firebaseApp);
export const firebaseAuth = RNFirebaseAuth;
