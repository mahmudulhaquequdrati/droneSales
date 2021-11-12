import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Confiq";

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
