// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK7lxAkVuWTTpFfZrwxSDCU8xpvzDIauY",
  authDomain: "chef-recipe-hunter-clien-9b851.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-9b851",
  storageBucket: "chef-recipe-hunter-clien-9b851.appspot.com",
  messagingSenderId: "831640627212",
  appId: "1:831640627212:web:909dc62643e08c4637a629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;