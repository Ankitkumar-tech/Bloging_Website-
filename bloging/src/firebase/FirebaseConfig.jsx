// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1f79Tx1JZ0zkJyK96XEYDXM1wd-yXx6s",
  authDomain: "my-project-7d3e5.firebaseapp.com",
  projectId: "my-project-7d3e5",
  storageBucket: "my-project-7d3e5.appspot.com",
  messagingSenderId: "96073936669",
  appId: "1:96073936669:web:f13f37f3a608e55d457bf4",
  measurementId: "G-RFNECQ5ZKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { fireDb, auth, storage };
