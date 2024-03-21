// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWs3LnPOLZvv9UHLGMUU6MiV9WhD3XqNQ",
  authDomain: "pense-e-brinque.firebaseapp.com",
  databaseURL: "https://pense-e-brinque-default-rtdb.firebaseio.com",
  projectId: "pense-e-brinque",
  storageBucket: "pense-e-brinque.appspot.com",
  messagingSenderId: "225335581654",
  appId: "1:225335581654:web:cf585f6e3c38af37fae277",
  measurementId: "G-R8745XGCPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);