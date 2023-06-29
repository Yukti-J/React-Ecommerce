// import firebase from "firebase/app";
// import "firebase/auth"
// import "firebase/firestore"
// import "firebase/storage"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBgWz8_WAumdcfrPD2htO3JiilYEKTCvcg",
  authDomain: "e-commerce-567f6.firebaseapp.com",
  projectId: "e-commerce-567f6",
  storageBucket: "e-commerce-567f6.appspot.com",
  messagingSenderId: "169093974748",
  appId: "1:169093974748:web:6e1a0405950df83c43c219",
  measurementId: "G-ZDY98S26PQ"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export{auth, db, storage};
