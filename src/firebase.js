// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGFxtvxbkLkLDUOn7qVw_wK-yGEizDhLk",
  authDomain: "to-do-app-616c8.firebaseapp.com",
  projectId: "to-do-app-616c8",
  storageBucket: "to-do-app-616c8.appspot.com",
  messagingSenderId: "15603396442",
  appId: "1:15603396442:web:1672f7704de425df104d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
