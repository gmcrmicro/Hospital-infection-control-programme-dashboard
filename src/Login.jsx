import { useState } from "react";
import loginBanner from "./assets/login-banner.png";
import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "./firebase";

export default function Login({ setIsLoggedIn }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setIsLoggedIn(true);

    } catch (error) {

      alert(error.message);

      console.error(error);
    }
  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">

  <img
    src={loginBanner}
    alt="Hospital Infection Control Banner"
    className="w-full h-auto"
  />

  <div className="p-10">

        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-800 text-white py-4 rounded-2xl text-xl"
        >
          Login
        </button>

            </div>

    </div>

  </div>

  );
}