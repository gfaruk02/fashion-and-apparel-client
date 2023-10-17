// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN74o18zawouRyPDVdbg8zCiCAb74915k",
  authDomain: "assignment-10-fashion-client.firebaseapp.com",
  projectId: "assignment-10-fashion-client",
  storageBucket: "assignment-10-fashion-client.appspot.com",
  messagingSenderId: "215726952392",
  appId: "1:215726952392:web:4fc19bf14fdade56ac7afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;