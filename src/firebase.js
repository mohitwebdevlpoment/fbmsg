// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUG8mfmJFJ0HV6Kh-G3wxFnuUwsO-xkrA",
  authDomain: "face-73140.firebaseapp.com",
  projectId: "face-73140",
  storageBucket: "face-73140.appspot.com",
  messagingSenderId: "47720738738",
  appId: "1:47720738738:web:8aaf1def90306ed66afeab",
  measurementId: "G-KX7NNTP9KC"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth,db };
