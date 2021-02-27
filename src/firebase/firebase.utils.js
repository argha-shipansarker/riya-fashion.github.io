import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA3uhcFlitpkhwFXYEu5mzou8e5ub0J4nU",
    authDomain: "riya-fashion-d58de.firebaseapp.com",
    projectId: "riya-fashion-d58de",
    storageBucket: "riya-fashion-d58de.appspot.com",
    messagingSenderId: "3173813978",
    appId: "1:3173813978:web:31e809bbad81766cde9fe3",
    measurementId: "G-FFS1N0DZC2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
