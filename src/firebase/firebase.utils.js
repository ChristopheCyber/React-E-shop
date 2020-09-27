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
export const createUserProfileDoc = async (user, displayName, ...addData2) => {
  if (!displayName) {
    /* for avoiding Error when 'displayName' is undefined (before being affected) :
       <Function DocumentReference.set() called with invalid data. 
       Unsupported field value: undefined> */
    displayName ="";
  }
  // if new field passed as object in ...Rest :
  // if (addData2.length > 0) {
  //   newField = addData2[0].newField;
  // } 

  //we update DB only if user != null ie if Signed In
  if (!user) { // <=> if (user === null)
    return;
  }
    
  // else we check if user aleady exists
  // verif if user (passed by auth.onAuthStateChanged in componentDidMount in App.jsx)
  // exists in Firestore DB
  console.log("firebase.utils.js =>Checking Firestore for user.uid =", user.uid)
  const userRef = firestore.doc(`/users/${user.uid}`);
  const snapShotuserRef = await userRef.get();
  console.log("firebase.utils.js =>Firestore existing user?; snapShot userRef =>",
    snapShotuserRef);
  console.log("=> userRef.get().exists =",
    snapShotuserRef.exists);
  // If NOT EXISTING USER => creation in DB by .set() method
  if (!snapShotuserRef.exists) {
    // const { displayName, email } = user;
    const email = user.email;
    // saving the timestamp of creation
    const createdDate = new Date();
    try {
      // creating USER DOCUMENT in Firestore with FIELDs we want
      console.log("creating USER DOCUMENT in Firestore with FIELDs we want: ");
      console.log("displayName=",displayName," ;email=", email," ;createdDate=",createdDate);
      console.log("user=",user);
      await userRef.set(
        { displayName, email, createdDate, ...addData2 }
      )
    } catch (err) {
      console.log("Error during creation of user:",user.uid,"; Error message=", err.message);
      console.log("Error =", err);
    }
  }
  else {
    console.log("User ", user.uid, " already existing in Firestore");
  }
  // in case of need
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
