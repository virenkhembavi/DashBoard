import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAPDteQHYPLkABbs98Ie_qrJTPCUyVZVgY",
    authDomain: "ig-clone-66bb0.firebaseapp.com",
    databaseURL: "https://ig-clone-66bb0-default-rtdb.firebaseio.com",
    projectId: "ig-clone-66bb0",
    storageBucket: "ig-clone-66bb0.appspot.com",
    messagingSenderId: "19837570606",
    appId: "1:19837570606:web:f4918cd8fd595d794699bf"


});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };

