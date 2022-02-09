"use strict";
import * as alu from "./alumnos.js";
import * as prof from "./profesores.js";
<<<<<<< HEAD

=======
>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3
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
export const crearCuenta = async (nombre,email,pass,rol) => {
    //Rol será 0 para alumno y 1 para profesor
            //Actualizaremos los datos de la BBDD con los nuevos datos, si es preciso.
            if(rol == 1){
                //Si es profesor con rol 1.
<<<<<<< HEAD
                prof.crearProfesorRegistro(email,pass);
            }
            else {
                //Si es alumno con rol 0.
                alu.crearAlumnoRegistro(email,pass);
            }
            
          
}
=======
                /* IMPLEMENTAR CAMBIOS DE VALORES
                prof.crearProfesor(nombre,usu,credenciales.user.metadata.creationTime,credenciales.user.uid,rol);
                */
            }
            else {
                //Si es alumno con rol 0.
                /* IMPLEMENTAR CAMBIOS DE VALORES
                alu.crearAlumno(nombre,usu,credenciales.user.metadata.creationTime,credenciales.user.uid,rol);
                */
            }
            
          })
          .catch((error) => {
            console.log(error);
          });
}

/* IMPLEMENTAMOS LAS FUNCIONES EN SUS JS RESPECTIVOS
BORRAR CUANDO NO HAGA FALTA
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
*/

/*
>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3
//Comprobar si hay una sesión iniciada.
onAuthStateChanged(autentificacion, (usuario) => {
    if (usuario) {
        console.log("Iniciando sesión...");
        prof.esProfesor(usuario.email);
        alu.esAlumno(usuario.email);
    } else {
        console.log("Sesión no iniciada.");
    }
});
//Función para iniciar sesión.
export const iniciarSesion = (usuario, contra) => {
  //Sólo podrá iniciar sesión si antes se ha "registrado", para esto hará falta que esté en el sistema.
    signInWithEmailAndPassword(autentificacion, usuario, contra)
      .then((credenciales) => {
<<<<<<< HEAD
        console.log("Iniciando sesión...");
        prof.esProfesor(usuario);
        alu.esAlumno(usuario);
=======
        console.log("Sesión Iniciada");

        //Cuando se inicie sesión redireccionamos a la pág siguiente.
        //location.href="";
>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3
      })
      .catch((error) => {
        console.log("Error al iniciar sesión");
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
