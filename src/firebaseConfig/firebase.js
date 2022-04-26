import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA0kAVCkov9yMyRcYftTGZt-xDLhJRIvtc",
  authDomain: "tallerenclasereactfire.firebaseapp.com",
  projectId: "tallerenclasereactfire",
  storageBucket: "tallerenclasereactfire.appspot.com",
  messagingSenderId: "925822614481",
  appId: "1:925822614481:web:81f98c4839f718c2e03ef0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)