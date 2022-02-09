"use strict";
import * as pintar from "../js/plantillas.js";

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
const alumnos = collection(db, "alumnos");

//Crear dato en la lista alumnos.
/* LO DEJAREMOS PARA LA PARTE DE ADMIN */
export const crearAlumno = async (nombre, ape1, ape2, email, fecha, id, rol) => {
    const nuevoAlumno = {
        nombre: nombre,
        apellido1: ape1,
        apellido2: ape2,
        email: email,
        fCreacion: fecha,
        rol: rol,
        id: id,
    };

    const listaAlu = await addDoc(alumnos, nuevoAlumno);
    console.log(`Nuevo alumno creado con id ${listaAlu.id} en la lista`);
    location.reload();
}
//Buscar alumno y actualizar datos de registro, y creamos la cuenta en Auth.
export const crearAlumnoRegistro = async (email,pass) => {
    const alumnosLista = await getDocs(alumnos);
    alumnosLista.docs.map((documento) => {
        if(documento.data().email == email){
            createUserWithEmailAndPassword(autentificacion, email, pass)
                  .then((credenciales) => {
                   console.log("actualizamos al alumno con los datos nuevos.");
                  })
                  .catch((error) => {
                    console.log("error al crear usuario");
                  });
        }
        else {
            console.log("No se permite el registro.");
        }
    });
}
//Datos del alumno.
export const verAlumno = async (id) => {
    const consulta = query(
        alumnos,
        where("id", "==", id)
    );
    const alumno = await getDocs(consulta);
    var nombre=alumno.docs[0].data().nombre;
    var apellidos=alumno.docs[0].data().apellido1+" "+alumno.docs[0].data().apellido2;
    var email=alumno.docs[0].data().email;
    var fCreacion=alumno.docs[0].data().fCreacion;

    console.log(nombre+" "+apellidos+" "+email+" "+fCreacion);
<<<<<<< HEAD
}
//Es un alumno.
export const esAlumno = async (email) => {
    const alumnosLista = await getDocs(alumnos);
    alumnosLista.docs.map((documento) => {
        if(documento.data().email == email){
            console.log("Entramos como alumno");
        }
        else {
            console.log("No es un alumno.");
        }
    });
=======
>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3
}
//Editar datos alumno.
export const editarAlumno = async (id,nombre) =>{
    try{
        const alumno = await doc(alumnos, id);
        await updateDoc(alumno, {
          nombre: nombre,
          //Todo lo que queramos editar.
        });
        
    }
    catch{
        console.log("Ha habido algún error al editar.")
    }
        
}
