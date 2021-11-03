import firebase, { initializeApp, getApps, getApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7kKj2agk_NSpz5ZdJZTnvbqvtWwujiI0",
  authDomain: "nextfire-acdc3.firebaseapp.com",
  projectId: "nextfire-acdc3",
  storageBucket: "nextfire-acdc3.appspot.com",
  messagingSenderId: "719336521561",
  appId: "1:719336521561:web:c5337893d3ac75f6fd1648",
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Auth exports
//const auth = new firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage };
