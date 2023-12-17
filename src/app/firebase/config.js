import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, query, where,getDoc, getDocs,collection, addDoc, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyATfuNCeGRUhNOlJyiB5TLGQ9PGhLZeYCo",
    authDomain: "final-hackathon-e5c46.firebaseapp.com",
    projectId: "final-hackathon-e5c46",
    storageBucket: "final-hackathon-e5c46.appspot.com",
    messagingSenderId: "299772604663",
    appId: "1:299772604663:web:53beab4851608e3ac3e3f2"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app);
  const storage = getStorage();
  export{auth,db,storage,signInWithEmailAndPassword,onAuthStateChanged,setDoc,getDoc,collection,onSnapshot,getDocs,doc,addDoc,ref,uploadBytes,getDownloadURL}