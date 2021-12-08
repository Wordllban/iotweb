import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyCLxQ_yaroBBik1RfoLrPsp8ahJ41lIFag",
    authDomain: "lab-12-e085a.firebaseapp.com",
    projectId: "lab-12-e085a",
    storageBucket: "lab-12-e085a.appspot.com",
    messagingSenderId: "331278185114",
    appId: "1:331278185114:web:00b595836bfb8d46246523" 
});

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const auth = firebase.auth();
export default Firebase;