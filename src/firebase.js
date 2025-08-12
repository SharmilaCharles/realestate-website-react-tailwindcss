// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFKo_y2xQQksbBYk9TA7xWlwOf9bm7j50",
  authDomain: "realtor-project-react-d7333.firebaseapp.com",
  projectId: "realtor-project-react-d7333",
  storageBucket: "realtor-project-react-d7333.firebasestorage.app",
  messagingSenderId: "597524141699",
  appId: "1:597524141699:web:a1007fdadaf613036f6db6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()