// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_946r0jdBoHGtX25M1ehPIWkiIY7HuLE",
  authDomain: "nuxt-spa-c6544.firebaseapp.com",
  projectId: "nuxt-spa-c6544",
  storageBucket: "nuxt-spa-c6544.appspot.com",
  messagingSenderId: "948900265335",
  appId: "1:948900265335:web:e15be90a5260b27c8eb572"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

export default (context, inject) => {
  inject('firebase', fireBaseApp)
}
