import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm0MXcgUm1ik2FZ7ieO6BvB5up7DmHyY0",
  authDomain: "chat-app-1fdf6.firebaseapp.com",
  projectId: "chat-app-1fdf6",
  storageBucket: "chat-app-1fdf6.appspot.com",
  messagingSenderId: "1046160132770",
  appId: "1:1046160132770:web:4f0368ec9233e6772065fb",
  measurementId: "G-3X2YDK38SB"
};


export const app = initializeApp(firebaseConfig);
export const auth  = getAuth()
const analytics = getAnalytics(app);