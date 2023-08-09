import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2Qr_4FtFGl1bJbK2i76W7Q2MlTU8XuJw",
  authDomain: "dalby-2ef05.firebaseapp.com",
  projectId: "dalby-2ef05",
  storageBucket: "dalby-2ef05.appspot.com",
  messagingSenderId: "247163677891",
  appId: "1:247163677891:web:6f5c5ce9fc157aa6740676"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);