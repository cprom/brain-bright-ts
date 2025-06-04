// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const API_KEY = import.meta.env.VITE_API_KEY



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "brain-bright.firebaseapp.com",
  projectId: "brain-bright",
  storageBucket: "brain-bright.firebasestorage.app",
  messagingSenderId: "517459296528",
  appId: "1:517459296528:web:1a5e0ff36eacb311b9a595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };