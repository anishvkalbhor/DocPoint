import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
//   localStorage.setItem('user', JSON.stringify(result.user));
  return result;
};

export const signOutUser = async () => {
  return signOut();
};

export const resetPassword = async (email) => {
  return sendPasswordResetEmail(auth, email);
};
export const updatePasswordUser = async (newPassword) => {
  return updatePassword(auth.currentUser, newPassword);
};


export const verifyEmail = async () => {
  return sendEmailVerification(auth.currentUser, {
    url : `${window.location.origin}/home`,
  });
};

