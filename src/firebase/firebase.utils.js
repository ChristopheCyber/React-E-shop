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

//to call an API is asyncronous (API Firestore ASYNC)
export const createUserProfileDoc = async (user, ...addData2) => {
  //we update DB only if user != null ie if Signed In
  if (!user) { // <=> if (user === null)
    return;
  }
  // else we check if user aleady exists
  console.log("Firestore existing collection;    QueryReference =>",
    firestore.collection('/users'));
  //** NO existing user */
  console.log("Firestore NO existing user; QueryReference =>",
    firestore.doc("/users/123456abcdef"));
  // verif if exists
  const userRefKO = firestore.doc('/users/123456abcdef');
  const snapShotuserRefKO = await userRefKO.get();
  console.log("Firestore NO existing user;    snapShot userRefKO =>",
    snapShotuserRefKO);
  //** existing user */
  console.log("Firestore existing user;    QueryReference =>",
    firestore.doc('/users/bpiTsk94k2H4dzZJJMqt'));
  // verif if test user exists
  const userRefOK = firestore.doc('/users/bpiTsk94k2H4dzZJJMqt');
  const snapShotuserRefOK = await userRefOK.get();
  console.log("Firestore existing user;    snapShot userRefOK =>",
    snapShotuserRefOK);
  // verif if user (passed by auth.onAuthStateChanged in componentDidMount in App.jsx)
  // exists in Firestore DB
  console.log("Checking Firestore for user.uid =", user.uid)
  const userRef = firestore.doc(`/users/${user.uid}`);
  const snapShotuserRef = await userRef.get();
  console.log("Firestore existing user?; snapShot userRef =>",
    snapShotuserRef);
  console.log("=> userRef.get().exists =",
    snapShotuserRef.exists);
  if (!snapShotuserRef.exists) {
    const { displayName, email } = user;
    // saving the timestamp of creation
    const createdDate = new Date();
    try {
      // creating user in Firestore
      await userRef.set(
        {
          displayName, email, createdDate, ...addData2
        }
      )
    } catch (err) {
      console.log("Error during user creation, Error message=", err.message);
      console.log("Error =", err);
    }
  }
  else {
    console.log("User ", user.uid, " already existing in Firestore");
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication:
var provider = new firebase.auth.GoogleAuthProvider();

//? Add param customized (optional):
provider.setCustomParameters({
  // 'login_hint': 'user@example.com',
  prompt: 'select_account'
});
//  sign in with a pop-up window, call signInWithPopup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//export all library in case of need
export default firebase;
