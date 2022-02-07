"use strict";
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

/******* FUNCIONES CUENTAS ********/
/********************** Gestión de cuentas *****************************/
const alumnos = collection(db, "alumnos");
const profesores = collection(db, "profesores");

//Función para la creación de las cuentas.
export const crearCuenta = async (usu,pass,nombre,rol) => {
    //Rol será 0 para alumno y 1 para profesor
    console.log("usuario creado en auth, rol"+rol);
        createUserWithEmailAndPassword(autentificacion, usu, pass)
          .then((credenciales) => {
            //Creamos el usuario en nuestra colección.
            if(rol == 1){
                //Si es profesor con rol 1.
                crearProfesor(nombre,usu,credenciales.user.metadata.creationTime,credenciales.user.uid,rol);
            }
            else {
                //Si es alumno con rol 0.
                crearAlumno(nombre,usu,credenciales.user.metadata.creationTime,credenciales.user.uid,rol);
            }
            
          })
          .catch((error) => {
            console.log(error);
          });
}
//Crear dato en la lista alumnos.
const crearAlumno = async (nombre, email, fecha, id, rol) => {
    
        const nuevoAlumno = {
            nombre: nombre,
            email: email,
            fCreacion: fecha,
            rol: rol,
            id: id,
        };
    
        const listaAlu = await addDoc(alumnos, nuevoAlumno);
        console.log(`Nuevo alumno creado con id ${listaAlu.id} en la lista`);
        location.reload();
}
//Crear dato en la lista profesores.
const crearProfesor = async (nombre, email, fecha, id, rol) => {
    
    const nuevoProfesor = {
        nombre: nombre,
        email: email,
        fCreacion: fecha,
        rol: rol,
        id: id,
    };

    const listaProf = await addDoc(profesores, nuevoProfesor);
    console.log(`Nuevo alumno creado con id ${listaProf.id} en la lista`);
    location.reload();
}
/*
//Comprobar si hay una sesión iniciada.
onAuthStateChanged(autentificacion, (usuario) => {
    if (usuario) {
        d.getElementById("sesion").innerHTML = "<h3>Sesión iniciada con "+usuario.email+", bienvenid@ <span id='nombreUsu'></span>!!</h3>";
        d.getElementById("sesion").innerHTML += "Con rol <span id='rolUsu'></span>";
        if (!usuario.emailVerified) d.getElementById("sesion").innerHTML += "<br>¡Email sin verificar!";
        d.getElementById("sesion").innerHTML += "<br><button id='cerrarC'>Cerrar sesión</button>";
        d.getElementById("cerrarC").addEventListener("click", () => {
            cerrarSesion();
        },false);
        obtenerNombreUsuario(usuario.uid);
    } else {
      d.getElementById("datos").innerHTML = "<h3>No se ha iniciado sesión</h3>";
    }
});
*/
//Función para iniciar sesión.
export const iniciarSesion = (usuario, contra) => {
    signInWithEmailAndPassword(autentificacion, usuario, contra)
      .then((credenciales) => {
        console.log("Sesión Iniciada");
        //Cuando se inicie sesión redireccionamos a la pág siguiente.
        //location.href="";
      })
      .catch((error) => {
        console.log(error);
      });
};
//Función para cerrar sesión.
const cerrarSesion = () => {
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