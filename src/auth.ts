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
import { auth } from "./firebaseConfig"; // Asegúrate de configurar correctamente `auth`

/**
 * Registra un nuevo usuario con correo electrónico y contraseña.
 * @param email Correo del usuario.
 * @param password Contraseña del usuario.
 * @returns Promesa que resuelve el objeto UserCredential.
 */
export const register = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Inicia sesión con correo electrónico y contraseña.
 * @param email Correo del usuario.
 * @param password Contraseña del usuario.
 * @returns Promesa que resuelve el objeto UserCredential.
 */
export const login = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * Envía un correo electrónico para restablecer la contraseña.
 * @param email Correo del usuario.
 * @returns Promesa que resuelve cuando el correo es enviado.
 */
export const resetPassword = async (email: string) => {
  return await sendPasswordResetEmail(auth, email);
};

/**
 * Envía un correo electrónico para verificar la dirección de email.
 * @returns Promesa que resuelve cuando el correo es enviado.
 * @throws Error si no hay un usuario actualmente autenticado.
 */
export const verifyEmail = async () => {
  if (auth.currentUser) {
    return await sendEmailVerification(auth.currentUser);
  }
  throw new Error("No user is currently logged in");
};

/**
 * Cierra la sesión del usuario actual.
 * @returns Promesa que resuelve cuando se ha cerrado la sesión.
 */
export const logout = async () => {
  return await signOut(auth);
};

export const AuthStateChanged = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};
