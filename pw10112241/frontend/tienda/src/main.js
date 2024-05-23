import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Comienza FireBase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT1zCk20VdaOg8WN3Hku-iQgL71LAaCos",
  authDomain: "programacion-web-74374.firebaseapp.com",
  projectId: "programacion-web-74374",
  storageBucket: "programacion-web-74374.appspot.com",
  messagingSenderId: "183732949401",
  appId: "1:183732949401:web:662f383df0874cb8f4c308"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//Termina FireBase


const app = createApp(App)

app.use(router);

app.mount('#app')
