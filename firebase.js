// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI5qhlHWi5ljBJIXtvBQF7LT8u9ys2Jiw",
  authDomain: "twitter-clone-tailwandcss.firebaseapp.com",
  projectId: "twitter-clone-tailwandcss",
  storageBucket: "twitter-clone-tailwandcss.appspot.com",
  messagingSenderId: "716863409595",
  appId: "1:716863409595:web:66b4e7735358f7dccc489e",
  measurementId: "G-X62Y2RHGQ1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
