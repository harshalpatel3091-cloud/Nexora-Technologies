import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBinjtoQiBY3LVI2dnneuL2ip0QHyWWp4Q",
  authDomain: "nexoratechnologies-50919.firebaseapp.com",
  projectId: "nexoratechnologies-50919",
  storageBucket: "nexoratechnologies-50919.firebasestorage.app",
  messagingSenderId: "141292805718",
  appId: "1:141292805718:web:ad1b3394483e45f2efa5f7"
};

// Initialize Firebase
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const storage = getStorage(app);
