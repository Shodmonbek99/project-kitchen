import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrEtyBLd2bdsEo5Fi4gH2ejhPXC__keCU",
  authDomain: "exam-efc49.firebaseapp.com",
  projectId: "exam-efc49",
  storageBucket: "exam-efc49.appspot.com",
  messagingSenderId: "251626869035",
  appId: "1:251626869035:web:6f756edddaa8e2a58df56e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
