import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeZblIOz1mAP1lH3_1UDywS3MUahQcOlw",
    authDomain: "ab-26365.firebaseapp.com",
    databaseURL: "https://ab-26365.firebaseio.com",
    projectId: "ab-26365",
    storageBucket: "ab-26365.appspot.com",
    messagingSenderId: "213865581104",
    appId: "1:213865581104:web:5abbd8caed2046c518fbf5",
    measurementId: "G-FMWDT3CKY5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };