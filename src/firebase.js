// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlqDytIlDrpf2JoU5yUGSWAfcNplIR10Q",
  authDomain: "fbmessage-4806d.firebaseapp.com",
  projectId: "fbmessage-4806d",
  storageBucket: "fbmessage-4806d.appspot.com",
  messagingSenderId: "630479443647",
  appId: "1:630479443647:web:bcc08d4b8d26724074980a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth,db };
