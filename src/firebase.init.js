// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6HvgPMFnq-pP-0yWxK-qLu--O_Z64rJE",
    authDomain: "traveler-847be.firebaseapp.com",
    projectId: "traveler-847be",
    storageBucket: "traveler-847be.appspot.com",
    messagingSenderId: "137379777100",
    appId: "1:137379777100:web:703e477ef06cee046f02e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;