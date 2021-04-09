import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCn1Sm8P-pgmsHe-n3iLD52LMk0ovTk2J0",
  authDomain: "silkymarket-6036a.firebaseapp.com",
  databaseURL: "https://silkymarket-6036a-default-rtdb.firebaseio.com",
  projectId: "silkymarket-6036a",
  storageBucket: "silkymarket-6036a.appspot.com",
  messagingSenderId: "463420618338",
  appId: "1:463420618338:web:e817961bc3a14c4ca8c33b",
  measurementId: "G-Q1K9YCB91M",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage };
export default fireDb;
