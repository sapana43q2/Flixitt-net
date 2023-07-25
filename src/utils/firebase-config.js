import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAe5-Ki5esaBtHRmKdBS3pgSIpVjgMZUhA",
  authDomain: "react-netflix-clone-ec15e.firebaseapp.com",
  projectId: "react-netflix-clone-ec15e",
  storageBucket: "react-netflix-clone-ec15e.appspot.com",
  messagingSenderId: "788578522474",
  appId: "1:788578522474:web:72068656ab74283b678113",
  measurementId: "G-FZG0YSMH32"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);