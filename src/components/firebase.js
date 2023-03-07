import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkFfm0JMFs2ZOOMglA0Rp-KH2eeKGsQvY",
    authDomain: "clone-f9dd0.firebaseapp.com",
    projectId: "clone-f9dd0",
    storageBucket: "clone-f9dd0.appspot.com",
    messagingSenderId: "426076076286",
    appId: "1:426076076286:web:b1b27453f3204e0f674daf",
    measurementId: "G-STGQ9H8P28"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };