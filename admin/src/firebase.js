// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getAnalytics } from "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-2ijsfBKBOp3ZHHcO_SDKz8MH35N2VQo",
  authDomain: "shopui-f2c51.firebaseapp.com",
  projectId: "shopui-f2c51",
  storageBucket: "shopui-f2c51.appspot.com",
  messagingSenderId: "370591541954",
  appId: "1:370591541954:web:b470aa1b2813cbf122695b",
  measurementId: "G-NJBZMSJ993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);