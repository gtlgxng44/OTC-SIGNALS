import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "ID",
  appId: "APPID"
};

export const app = initializeApp(firebaseConfig);