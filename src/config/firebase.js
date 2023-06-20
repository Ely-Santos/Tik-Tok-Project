
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyC0g5-cW1VmHNsVc33BSzqsilcV0UXY1NE",
  authDomain: "tiktok---jornada-f6b3e.firebaseapp.com",
  projectId: "tiktok---jornada-f6b3e",
  storageBucket: "tiktok---jornada-f6b3e.appspot.com",
  messagingSenderId: "450133830218",
  appId: "1:450133830218:web:628bc6745b08d700a114b3",
  measurementId: "G-7N942N68ZE"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;