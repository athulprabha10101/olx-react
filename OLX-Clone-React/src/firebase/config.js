import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB584yEx4GYUcBO5W76WiUXblCIcmeov28",
    authDomain: "olxclone-ada90.firebaseapp.com",
    projectId: "olxclone-ada90",
    storageBucket: "olxclone-ada90.appspot.com",
    messagingSenderId: "349984742878",
    appId: "1:349984742878:web:7d19dcaa3cd08e587e114f",
    measurementId: "G-5NVPEMS76N"
};

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const db = getFirestore(Firebase)    
export const storage = getStorage(Firebase)