import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWafCTVzlfwRGCi7m-Cfvt3xSJbH3UYkQ",
  authDomain: "ai-resume-analyzer-70998.firebaseapp.com",
  projectId: "ai-resume-analyzer-70998",
  storageBucket: "ai-resume-analyzer-70998.firebasestorage.app",
  messagingSenderId: "126491453900",
  appId: "1:126491453900:web:4cd8f0720ecb842ee09569"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
