import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_7-TGIVRLllUD0EYrnqhlRfpMAaGpm2Q",
  authDomain: "classroom-24604.firebaseapp.com",
  projectId: "classroom-24604",
  storageBucket: "classroom-24604.appspot.com",
  messagingSenderId: "893774861626",
  appId: "1:893774861626:web:59ff1d8209517eb3ec6c03"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebase.database().ref("/");
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { storage,auth, provider };
export default db;
