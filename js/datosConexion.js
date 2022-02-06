"use strict";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCnAh6y5pEkFfMQNu0Yuz8QlTwTdrN-CvE",
    authDomain: "edugame-93524.firebaseapp.com",
    projectId: "edugame-93524",
    storageBucket: "edugame-93524.appspot.com",
    messagingSenderId: "1045281018014",
    appId: "1:1045281018014:web:78972a42f146099e8fab8f"
};

// Crear el enlace a la aplicación
const app = initializeApp(firebaseConfig);
const autentificacion = getAuth(app);
// Exportar el objeto aplicación
export { app,autentificacion };