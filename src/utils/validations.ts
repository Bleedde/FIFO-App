import { FirebaseError } from "firebase/app";

export const handleFirebaseErrorRegister = (firebaseError: FirebaseError) => {
  const errorCode = firebaseError.code;
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "El correo electrónico ya está en uso.";
    case "auth/invalid-email":
      return "El formato del correo electrónico no es válido.";
    case "auth/operation-not-allowed":
      return "El registro con correo electrónico y contraseña está deshabilitado.";
    case "auth/weak-password":
      return "La contraseña es demasiado débil. Debe tener al menos 6 caracteres.";
    default:
      return "Ocurrió un error inesperado. Por favor, inténtalo de nuevo.";
  }
};

export const handleFirebaseErrorLogin = (firebaseError: FirebaseError) => {
  const errorCode = firebaseError.code;
  switch (errorCode) {
    case "auth/invalid-credential":
      return "El correo electrónico o la contraseña son incorrectos.";
    case "auth/user-not-found":
      return "No se encontró un usuario con este correo.";
    case "auth/wrong-password":
      return "La contraseña es incorrecta.";
    case "auth/invalid-email":
      return "El formato del correo electrónico no es válido.";
    default:
      return "Ocurrió un error inesperado. Por favor, inténtalo de nuevo.";
  }
};

export const validateEmail = (
  email: string,
  setEmailError: (error: string) => void
): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    setEmailError("El email es requerido");
    return false;
  }
  if (!emailRegex.test(email)) {
    setEmailError("Por favor, introduce un email válido");
    return false;
  }
  setEmailError("");
  return true;
};

export const validatePassword = (
  password: string,
  setPasswordError: (error: string) => void
): boolean => {
  if (!password) {
    setPasswordError("La contraseña es requerida");
    return false;
  }
  if (password.length < 6) {
    setPasswordError("La contraseña debe tener al menos 6 caracteres");
    return false;
  }
  setPasswordError("");
  return true;
};
