// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeUu_6rs37Ix6DfdeXZaIQ6T7HF0gDaZ4",
  authDomain: "first-email-password-auth-app.firebaseapp.com",
  projectId: "first-email-password-auth-app",
  storageBucket: "first-email-password-auth-app.appspot.com",
  messagingSenderId: "250098545033",
  appId: "1:250098545033:web:4ad99425bf485e03613158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;