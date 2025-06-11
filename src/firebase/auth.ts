import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth, signInAnonymously
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};

const auth = getAuth();
export const doSignInAnonymously = async () => {
  try {
    await signInAnonymously(auth);
  } catch (error) {
    console.error('Error signing in anonymously:', error);
  }
}