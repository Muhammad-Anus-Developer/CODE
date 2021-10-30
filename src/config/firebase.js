import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAslJZTmRE5_qr9H6rLWURxX_u5AD0pui8",
  authDomain: "carriculam-vitae.firebaseapp.com",
  databaseURL: "https://carriculam-vitae.firebaseio.com",
  projectId: "carriculam-vitae",
  storageBucket: "carriculam-vitae.appspot.com",
  messagingSenderId: "687952810161",
  appId: "1:687952810161:web:7fb6f1aaa6160c6c52d290",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getDatabase,
  ref,
  set,
  onValue,
  signOut,
  onAuthStateChanged,
};
