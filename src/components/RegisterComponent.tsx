import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../auth";
import {
  handleFirebaseErrorRegister,
  validateEmail,
  validatePassword,
} from "../utils/validations";

// type Props = {};

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = validateEmail(email, setEmailError);
    const isPasswordValid = validatePassword(password, setPasswordError);

    if (isEmailValid && isPasswordValid) {
      try {
        await register(email, password);
      } catch (err: unknown) {
        console.error(err);
        const errorMessage = handleFirebaseErrorRegister(err as FirebaseError);
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-[400px]">
      <div className="w-full max-w-md p-6 bg-gray-50 border border-[#A64D79] rounded-3xl shadow-lg">
        <h1 className="text-center text-2xl text-gray-800 mb-6">Registrar</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Introduce your email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={() => validateEmail(email, setEmailError)}
              className={`w-full p-3 text-gray-700 border ${
                emailError ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:border-[#A64D79] focus:ring-1 focus:ring-[#3B1C32]`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Create your password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={() => validatePassword(password, setPasswordError)}
              className={`w-full p-3 text-gray-700 border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:border-[#A64D79] focus:ring-1 focus:ring-[#3B1C32]`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#A64D79] text-white text-lg font-semibold rounded-md hover:bg-[#6A1E55] transition"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Ya tienes una cuenta?{" "}
          <Link to="/" className="text-[#A64D79] font-semibold">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
