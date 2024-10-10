// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyCmBsFKAsHHA7sFdjOhPdxNjqBe-p3Gw1w",
    authDomain: "truerx-133b2.firebaseapp.com",
    projectId: "truerx-133b2",
    storageBucket: "truerx-133b2.appspot.com",
    messagingSenderId: "199388193793",
    appId: "1:199388193793:web:92e00ba7d5f97536b88c00",
    measurementId: "G-D33PMLXTLX"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, auth };