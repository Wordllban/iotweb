import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Firebase = firebase.initializeApp({
    apiKey: "apikey",
    authDomain: "authDomain",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId" 
});

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const auth = firebase.auth();
export default Firebase;