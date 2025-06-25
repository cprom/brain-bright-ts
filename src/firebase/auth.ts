import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth, signInAnonymously
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};

const auth1 = getAuth();
export const doSignInAnonymously = async () => {
  try {
    await signInAnonymously(auth1);
  } catch (error) {
    console.error('Error signing in anonymously:', error);
  }
}