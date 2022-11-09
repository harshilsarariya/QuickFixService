// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCainvGoxsSIlqDZhZRqAY7f1v2OBFro0k",
  authDomain: "ideal-c84d4.firebaseapp.com",
  projectId: "ideal-c84d4",
  storageBucket: "ideal-c84d4.appspot.com",
  messagingSenderId: "855144560118",
  appId: "1:855144560118:web:546ccc6b2efb96155d43d7",
  measurementId: "G-VP7Q10MNWB",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
