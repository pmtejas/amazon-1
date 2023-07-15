import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBSyUTO2bLUNn6GGO3Ymgh3q4rfIQe436Q",
  authDomain: "fir-dcdf3.firebaseapp.com",
  projectId: "fir-dcdf3",
  storageBucket: "fir-dcdf3.appspot.com",
  messagingSenderId: "605091888096",
  appId: "1:605091888096:web:45458f9d231753e6b28985",
  measurementId: "G-7CPMYDPRT5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,db
};

