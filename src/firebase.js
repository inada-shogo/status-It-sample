import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkiIdjcEOCf9G62SwaydcRWT6wgd-KDJw",
  authDomain: "app-list-store.firebaseapp.com",
  projectId: "app-list-store",
  storageBucket: "app-list-store.appspot.com",
  messagingSenderId: "865918796077",
  appId: "1:865918796077:web:e26b012b0295ad7bf293a4",
  measurementId: "G-0X57LV6P87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;