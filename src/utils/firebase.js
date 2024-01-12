import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9owvOnNwVHKAFtKjrckEuDTsrgJK_XAQ",
  authDomain: "ecommerce-site-de622.firebaseapp.com",
  projectId: "ecommerce-site-de622",
  storageBucket: "ecommerce-site-de622.appspot.com",
  messagingSenderId: "997385231026",
  appId: "1:997385231026:web:6acce65e2526d7ee2a87ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);