import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxGPt-M65zTgnCMA77UBRmV6WrXv5dwXw",
    authDomain: "store-499f8.firebaseapp.com",
    databaseURL: "https://store-499f8.firebaseio.com",
    projectId: "store-499f8",
    storageBucket: "store-499f8.appspot.com",
    messagingSenderId: "18126373511",
    appId: "1:18126373511:web:7e991b896b78a9fb892e22",
    measurementId: "G-1XDYF0ND2N"
};
  // Initialize Firebase
    

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebaseApp.firestore();   // db = database
const auth = firebase.auth();

export { db, auth };  