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
/** Conexión con la base de datos. **/
const db = getFirestore(app);
var d = document;
const asignaturas = collection(db, "asignaturas");
//Crear dato en la colección asignaturas.
export const crearAsignatura = async (nombre, curso, alumnos, profesor) => {
    const nuevaAsignatura = {
        nombre: nombre,
        curso: curso,
        alumnos: alumnos,
        profesor: profesor
    };

    const listaAsig = await addDoc(asignaturas, nuevaAsignatura);
    console.log(`Nueva asignatura creada con id ${listaAsig.id} en la colección`);
    location.reload();
}
//Datos del asignatura.
export const verAsignatura = async (nombre, curso) => {
    const consulta = query(
        asignaturas,
        where("nombre", "==", nombre),
        where("curso", "==", curso)
    );
    const asignatura = await getDocs(consulta);
    var nombre=asignatura.docs[0].data().nombre;
    var curso=asignatura.docs[0].data().curso;
    var arrayAlumnos=asignaturas.docs[0].data().alumnos;
    var profesor=asignatura.docs[0].data().profesor;

    console.log(nombre+" "+curso+" "+arrayAlumnos+" "+profesor);
}
//Editar datos asignatura.
export const editarAsignatura = async (nombre) =>{
    try{
        const asignatura = await doc(asignaturas, nombre);
        await updateDoc(asignatura, {
          nombre: nombre,
          //Añadimos lo que queramos editar.
        });
        
    }
    catch{
        console.log("Ha habido algún error al editar.")
    }
        
}