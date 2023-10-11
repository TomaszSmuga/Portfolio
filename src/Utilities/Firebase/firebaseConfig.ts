import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAq1lan0MJpIdBrR24STMz8Ygziobdf9jE",
  authDomain: "portfolio-3c73f.firebaseapp.com",
  projectId: "portfolio-3c73f",
  storageBucket: "portfolio-3c73f.appspot.com",
  messagingSenderId: "1066748327038",
  appId: "1:1066748327038:web:dcb9a621327610a3d9942f",
  measurementId: "G-VDBRHDMDRS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
