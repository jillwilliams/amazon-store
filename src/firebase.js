import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: ",
    authDomain: "",
    databaseURL: "",            // <<<insert firebase config file here
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
  // Initialize Firebase
    

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebaseApp.firestore();   // db = database
const auth = firebase.auth();

export { db, auth };  
