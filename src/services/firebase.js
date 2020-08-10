import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAd_SjAWPXp90l_9EazHrPxUsnvVlyKlFo",
  authDomain: "clone-cf1d9.firebaseapp.com",
  databaseURL: "https://clone-cf1d9.firebaseio.com",
  projectId: "clone-cf1d9",
  storageBucket: "clone-cf1d9.appspot.com",
  messagingSenderId: "583028255170",
  appId: "1:583028255170:web:631ce952f0a3dd11c84e5b",
  measurementId: "G-SGWF7HBK8W",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
