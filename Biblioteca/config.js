import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA8B_V5FoSZwnH0ag3CdKRP4neDcaqC7sc",
  authDomain: "bibliotecavirtual-22b38.firebaseapp.com",
  projectId: "bibliotecavirtual-22b38",
  storageBucket: "bibliotecavirtual-22b38.appspot.com",
  messagingSenderId: "564730869443",
  appId: "1:564730869443:web:f29a17824c84ad78ad5476"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
