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
const cursos = collection(db, "cursos");
//Crear dato en la colección cursos.
export const crearCurso = async (nombre, asignaturas, alumnos) => {
    const nuevoCurso = {
        nombre: nombre,
        asignaturas: asignaturas,
        alumnos: alumnos
    };

    const listaCur = await addDoc(cursos, nuevoCurso);
    console.log(`Nuevo curso creado con id ${listaCur.id} en la colección`);
    location.reload();
}
//Datos del curso.
export const verCurso = async (nombre) => {
    const consulta = query(
        cursos,
        where("nombre", "==", nombre)
    );
    const curso = await getDocs(consulta);
    var nombre=curso.docs[0].data().nombre;
    var arrayAsignaturas=curso.docs[0].data().asignaturas;
    var arrayAlumnos=curso.docs[0].data().alumnos;

    console.log(nombre+" "+arrayAsignaturas+" "+arrayAlumnos);
}
//Editar datos curso.
export const editarCurso = async (nombre) =>{
    try{
        const curso = await doc(cursos, nombre);
        await updateDoc(curso, {
          nombre: nombre,
          //Añadimos lo que queramos editar.
        });
        
    }
    catch{
        console.log("Ha habido algún error al editar.")
    }
        
}