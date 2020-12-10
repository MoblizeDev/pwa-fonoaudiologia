import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");
require("firebase/database");
require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyBpFAIvGBQWQEMZyahgoGvs7huO0YJk2zc",
    authDomain: "pwa-fono-moblize.firebaseapp.com",
    databaseURL: "https://pwa-fono-moblize-default-rtdb.firebaseio.com/",
    projectId: "pwa-fono-moblize",
    storageBucket: "pwa-fono-moblize.appspot.com",
    messagingSenderId: "763812556385",
    appId: "1:763812556385:web:8bec6ce00216ff64b50420"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
