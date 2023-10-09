import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

const Firebase = firebase.initializeApp(firebaseConfig.firebase);

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export const auth = firebase.auth();
export default Firebase;
