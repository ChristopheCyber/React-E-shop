import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

//Query of documents

//liste des doc (= users/utilisateurs) dans la collection "users"
firestore.collection("users")
// ID du doc avec field displayName : "Chris"
firestore.collection("users").doc("bpiTsk94k2H4dzZJJMqt")
// sa collection "cartitems"
firestore.collection("users").doc("bpiTsk94k2H4dzZJJMqt").collection("cartitems")
firestore.collection("users/bpiTsk94k2H4dzZJJMqt/cartitems")
//ID de son doc avec field itemdress : "red dress" 
firestore.collection("users").doc("bpiTsk94k2H4dzZJJMqt").collection("cartitems").doc("hBfWsngLccKUI93uqDRQ")
firestore.doc("users/bpiTsk94k2H4dzZJJMqt/cartitems/hBfWsngLccKUI93uqDRQ")