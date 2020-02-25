import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1c2xOknuWKZZgCC1Z7xwlHqyyhSgccjQ",
  authDomain: "social-media-react-b96fc.firebaseapp.com",
  databaseURL: "https://social-media-react-b96fc.firebaseio.com",
  projectId: "social-media-react-b96fc",
  storageBucket: "social-media-react-b96fc.appspot.com",
  messagingSenderId: "680126603046",
  appId: "1:680126603046:web:a458d2732c9dd106e32be7"
};


export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;