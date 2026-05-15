import { useState } from "react";

import tnLogo from "./assets/tn-logo.png";
import ramnadLogo from "./assets/ramnad-logo.png";
import dmeLogo from "./assets/dme-logo.png";

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

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden">

        <div className="bg-blue-950 text-white p-6">

          <div className="flex items-center justify-between">

            <img
              src={ramnadLogo}
              alt="Ramnad Logo"
              className="w-24 h-24 object-contain bg-white rounded-full p-2"
            />

            <div className="text-center flex-1 px-4">

              <img
                src={tnLogo}
                alt="Tamil Nadu Government Logo"
                className="w-24 h-24 object-contain mx-auto mb-3 bg-white rounded-full p-2"
              />

              <h1 className="text-4xl font-bold mb-2">
                DEPARTMENT OF MICROBIOLOGY
              </h1>

              <h2 className="text-2xl font-semibold">
                Government Medical College & Hospital, Ramanathapuram, Tamil Nadu, India
              </h2>

              <h3 className="text-4xl font-bold mt-1">
                HOSPITAL INFECTION CONTROL PROGRAMME PORTAL
              </h3>

            </div>

            <img
              src={dmeLogo}
              alt="DME Logo"
              className="w-24 h-24 object-contain bg-white rounded-full p-2"
            />

          </div>

        </div>

        <div className="p-10">

          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
            Secure Login
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
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-2xl text-xl font-semibold transition"
          >
            Login
          </button>

        </div>

      </div>

    </div>

  );
}