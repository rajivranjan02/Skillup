// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from '@firebase/firestore';
import {getStorage} from 'firebase/storage';
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAkJ10AG2fcsuJWkU8wg2AC0XRkXizw7zE",
  authDomain: "skillup-98cab.firebaseapp.com",
  databaseURL: "https://skillup-98cab-default-rtdb.firebaseio.com",
  projectId: "skillup-98cab",
  storageBucket: "skillup-98cab.appspot.com",
  messagingSenderId: "734435119714",
  appId: "1:734435119714:web:88ab84f9149548a4f2b73b",
  measurementId: "G-99E16JCXJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

const database=getFirestore(app);
const db=getFirestore(app)
const imageDB=getStorage(app)
const  txtDB = getFirestore(app)
const storage = getStorage(app);
export {app,auth,database,imageDB,txtDB,storage,db};