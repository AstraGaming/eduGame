"use strict";
import * as alu from "./alumnos.js";
import * as prof from "./profesores.js";
import { esAdmin } from "./admin.js";

import {app, autentificacion} from "../js/datosConexion.js";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    onSnapshot,
    doc,
    query,
    where,
    orderBy,
    limit,
    addDoc,
    setDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    deleteDoc,
    deleteField,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

/** Conexión con la base de datos. **/
const db = getFirestore(app);
var d = document;
/******* FUNCIONES CUENTAS ********/
/********************** Gestión de cuentas *****************************/
const alumnos = collection(db, "alumnos");
const profesores = collection(db, "profesores");

//Función para la creación de las cuentas.
export const crearCuenta = async (nombre, ape1, ape2, email, pass, rol) => {
    //Rol será 0 para alumno y 1 para profesor
            //Actualizaremos los datos de la BBDD con los nuevos datos, si es preciso.
            if(rol == 1){
                //Si es profesor con rol 1.
                console.log(nombre, ape1, ape2, email,pass);
                prof.crearProfesorRegistro(nombre, ape1, ape2, email,pass);
            }
            else {
                //Si es alumno con rol 0.
                alu.crearAlumnoRegistro(nombre, ape1, ape2, email,pass);
            }
            
          
}

//Comprobar si hay una sesión iniciada.
onAuthStateChanged(autentificacion, (usuario) => {
    if (usuario) {
        console.log("Iniciando sesión...");
        if (usuario.email == "admin@edugame.com"){
          esAdmin();
        }
        else{
          prof.esProfesor(usuario.email);
          alu.esAlumno(usuario.email);
        }
    } else {
        message("Sesión no iniciada.", "mal", 3000);
    }
});

//Función para iniciar sesión.
export const iniciarSesion = (usuario, contra) => {
  //Sólo podrá iniciar sesión si antes se ha "registrado", para esto hará falta que esté en el sistema.
    signInWithEmailAndPassword(autentificacion, usuario, contra)
      .then((credenciales) => {
        console.log("Iniciando sesión...");
        if (usuario == "admin@edugame.com"){
          esAdmin();
        }else{
          prof.esProfesor(usuario.email);
          alu.esAlumno(usuario.email);
        }
        
      })
      .catch((error) => {
        message("Error al iniciar sesión", "mal", 3000);
      });
};

//Función para cerrar sesión.
export const cerrarSesion = () => {
    autentificacion
      .signOut()
      .then(() => {
        console.log("Salir");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
};

// Mensaje informativo
function message(message, type, time) {
  let infoGame = document.getElementById("info");
  infoGame.innerHTML = message;
  infoGame.classList.remove("invisible");
  if(type == "mal"){
      infoGame.classList.add("mal");
  }else {
      infoGame.classList.add("bien");
  }
  
  setTimeout( () => {
     infoGame.classList.add("invisible");
     if(type == "mal"){
      infoGame.classList.remove("mal");
  }else {
      infoGame.classList.remove("bien");
  }
     infoGame.innerHTML = "";
  }, time);
}