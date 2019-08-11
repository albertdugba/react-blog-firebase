import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgyBrA7lJNG4AfthA9JWyba3BNNfMGD-0",
  authDomain: "blog-69dc0.firebaseapp.com",
  databaseURL: "https://blog-69dc0.firebaseio.com",
  projectId: "blog-69dc0",
  storageBucket: "",
  messagingSenderId: "360201113866",
  appId: "1:360201113866:web:b07e9d815984df84"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
// firestore.settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
