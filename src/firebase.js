import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-8ob9YHW3CfypsWiQNYe73qQOWPYMGfw",
  authDomain: "sajansiremp.firebaseapp.com",
  projectId: "sajansiremp",
  storageBucket: "sajansiremp.appspot.com",
  messagingSenderId: "37662885902",
  appId: "1:37662885902:web:60cb3db3d2a0dbe243545f",
  measurementId: "G-68PVB7VDT2",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
