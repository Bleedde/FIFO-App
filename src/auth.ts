import {
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

export interface Item {
  id: string;
  userId: string;
  value: string;
}

/**
 * Registers a new user with email and password.
 * @param email User's email.
 * @param password User's password.
 * @returns Promise that resolves to UserCredential object.
 */
export const register = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Signs in with email and password.
 * @param email User's email.
 * @param password User's password.
 * @returns Promise that resolves to UserCredential object.
 */
export const login = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * Sends a password reset email.
 * @param email User's email.
 * @returns Promise that resolves when email is sent.
 */
export const resetPassword = async (email: string) => {
  return await sendPasswordResetEmail(auth, email);
};

/**
 * Sends an email verification link.
 * @returns Promise that resolves when email is sent.
 * @throws Error if no user is currently authenticated.
 */
export const verifyEmail = async () => {
  if (auth.currentUser) {
    return await sendEmailVerification(auth.currentUser);
  }
  throw new Error("No user is currently logged in");
};

/**
 * Signs out the current user.
 * @returns Promise that resolves when sign out is complete.
 */
export const logout = async () => {
  return await signOut(auth);
};

export const AuthStateChanged = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const addData = async (data: { value: string }) => {
  const user = auth.currentUser;
  if (user) {
    try {
      const docRef = await addDoc(collection(db, "items"), {
        ...data,
        userId: user.uid,
      });
      return {
        id: docRef.id,
        userId: user.uid,
        value: data.value,
      };
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
};

export const getData = async (): Promise<Item[] | undefined> => {
  const user = auth.currentUser;
  if (user) {
    try {
      const q = query(collection(db, "items"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Item[];
      return userData;
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }
};
