// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDomc7haFSZp3525XO7CAcXJ9vmRHXB_Uc",
  authDomain: "zain-iq-bb06c.firebaseapp.com",
  projectId: "zain-iq-bb06c",
  storageBucket: "zain-iq-bb06c",
  messagingSenderId: "35983722300",
  appId: "1:35983722300:web:70b85ba33fb236bef04039",
  measurementId: "G-N2P5S6R7K6",
  databaseURL: "https://zain-iq-bb06c-default-rtdb.firebaseio.com/",
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
