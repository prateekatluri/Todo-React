import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCphHYNSJO1aKJZ_V3a2rxyzOlV4KiPE1k",
  authDomain: "todo-list-a4d37.firebaseapp.com",
  projectId: "todo-list-a4d37",
  storageBucket: "todo-list-a4d37.appspot.com",
  messagingSenderId: "628046625523",
  appId: "1:628046625523:web:381b236bf1a2cc3a105586",
});
const db = firebaseapp.firestore();

export default db;
