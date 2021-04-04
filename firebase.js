import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEABTVkoQZJd1nQLsh9mR8Gnym0On8Yi0",
    authDomain: "android-ios-application-4444e.firebaseapp.com",
    projectId: "android-ios-application-4444e",
    storageBucket: "android-ios-application-4444e.appspot.com",
    messagingSenderId: "324101109716",
    appId: "1:324101109716:web:47f68699940c0c16a54841",
    measurementId: "G-P2REFRFREV"
};

let App;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };