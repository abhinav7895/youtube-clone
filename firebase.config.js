// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp0XT7XWJzp-5-EInvUWOtclqm1xOP8oE",
  authDomain: "clone-1705204998255.firebaseapp.com",
  projectId: "youtube-clone-1705204998255",
  storageBucket: "youtube-clone-1705204998255.appspot.com",
  messagingSenderId: "1088518916727",
  appId: "1:1088518916727:web:134f7b90b691f455619472",
  measurementId: "G-7ZQB24K6BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);