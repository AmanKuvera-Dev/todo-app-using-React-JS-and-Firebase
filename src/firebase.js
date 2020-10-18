import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1599vFjCREiYISGwFOxEVe87JQB6J87o",
    authDomain: "todo-app-cp-95d1a.firebaseapp.com",
    databaseURL: "https://todo-app-cp-95d1a.firebaseio.com",
    projectId: "todo-app-cp-95d1a",
    storageBucket: "todo-app-cp-95d1a.appspot.com",
    messagingSenderId: "253282097295",
    appId: "1:253282097295:web:20be3f5826398519dd38fa",
    measurementId: "G-7CDV8261DR"
});

const db = firebaseApp.firestore();

export default db;