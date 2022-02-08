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
var d = document;
const alumnos = collection(db, "alumnos");

//Crear dato en la lista alumnos.
/* LO DEJAREMOS PARA LA PARTE DE ADMIN */
export const crearAlumno = async (nombre, email, fecha, id, rol) => {
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
//Datos del alumno.
export const verAlumno = async (id) => {
    const consulta = query(
        alumnos,
        where("id", "==", id)
    );
    const alumno = await getDocs(consulta);
    var nombre=alumno.docs[0].data().nombre;
    var email=alumno.docs[0].data().email;
    var fCreacion=alumno.docs[0].data().fCreacion;

    console.log(nombre+" "+email+" "+fCreacion);
}
//Editar datos alumno.
export const editaralumno = async (id,nombre) =>{
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