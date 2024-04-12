import { initializeApp } from "firebase/app";

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

const app = initializeApp(firebaseConfig);

export default app;