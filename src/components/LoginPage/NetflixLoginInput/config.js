// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUHkwL3VO4Dbr76u1tdt-zHhxre-Tb4lQ",
  authDomain: "netflix-clone-50eb5.firebaseapp.com",
  projectId: "netflix-clone-50eb5",
  storageBucket: "netflix-clone-50eb5.appspot.com",
  messagingSenderId: "1092069968328",
  appId: "1:1092069968328:web:516bf145c651c08b9798fd",
  measurementId: "G-56NRJJ19EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export{auth,provider} 