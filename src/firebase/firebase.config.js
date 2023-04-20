// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWgZS1w340kiSx7rMzy_P_YAqbT961U-o",
  authDomain: "simple-ema-fire.firebaseapp.com",
  projectId: "simple-ema-fire",
  storageBucket: "simple-ema-fire.appspot.com",
  messagingSenderId: "154756173492",
  appId: "1:154756173492:web:91a41e72dd7624803591e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;