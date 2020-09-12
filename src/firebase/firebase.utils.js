import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
// Firestore API key :
const config = {
    apiKey: "AIzaSyDiPIJrkUwEvXWM_0lq-6v3ZvLeHnT4syk",
    authDomain: "e-shop-db-c6159.firebaseapp.com",
    databaseURL: "https://e-shop-db-c6159.firebaseio.com",
    projectId: "e-shop-db-c6159",
    storageBucket: "e-shop-db-c6159.appspot.com",
    messagingSenderId: "967850138626",
    appId: "1:967850138626:web:ee3cc22e5b7404f1729b1b",
    measurementId: "G-1HK90MF7MQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication:
var provider = new firebase.auth.GoogleAuthProvider();

//Add param customized (optional):
provider.setCustomParameters({
    // 'login_hint': 'user@example.com',
    prompt: 'select_account'
  });
//  sign in with a pop-up window, call signInWithPopup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//export all library in case of need
export default firebase;
