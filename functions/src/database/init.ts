import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQDJ4iD4S4dWZygL0-5XUpfCKUWPNcUBM",
  authDomain: "profotbolltraning-533fd.firebaseapp.com",
  projectId: "profotbolltraning-533fd",
  storageBucket: "profotbolltraning-533fd.appspot.com",
  messagingSenderId: "695504606797",
  appId: "1:695504606797:web:846c19e278cbd0ae17ee04",
  measurementId: "G-WKMVS2DQPM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
