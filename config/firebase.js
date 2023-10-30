import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD19sm-6OmKxE5bClxLvLVhsFXQVGTrcHA",
    authDomain: "waze-clone-35c9d.firebaseapp.com",
    projectId: "waze-clone-35c9d",
    storageBucket: "waze-clone-35c9d.appspot.com",
    messagingSenderId: "389975384841",
    appId: "1:389975384841:web:fe3e6b2c132bd2a805e9d8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);