import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvL_evH7aioAaBYYHkx2SsguTEdHWbx_Q",
  authDomain: "infection-control-ai.firebaseapp.com",
  projectId: "infection-control-ai",
  storageBucket: "infection-control-ai.firebasestorage.app",
  messagingSenderId: "844489040257",
  appId: "1:844489040257:web:1fa3b804d5eae453860880",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);