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
import { buscarAsignatura } from "./cursos.js";
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
//Datos de la asignatura para mostrar alumnos
export const verAlumnos = async (profe, nombre) => {
    const asignaturasLista = await getDocs(asignaturas);
    asignaturasLista.docs.map((documento) => {
        for (var i = 0; i < nombre.length; i++){
            if(documento.data().nombre == nombre[i] && (documento.data().profesor == profe)){
                d.getElementById("alumnosProfesor").innerHTML += "<h2 id='"+documento.data().nombre+"'></h3><h3>"+documento.data().nombre+"</h3>";
                buscarAsignatura(documento.data().nombre);
                console.log(documento.data().alumnos);
                d.getElementById("alumnosProfesor").innerHTML += "<table><tr><th>Nombre</th><th>1er Apellido</th><th>2º Apellido</th></tr>";
                for (var j = 0; j < documento.data().alumnos.length; j++){
                    d.getElementById("alumnosProfesor").innerHTML += "<table><tr><td>"+documento.data().alumnos[j]+"</td><td></td><td></td></tr></table>";
                }
                d.getElementById("alumnosProfesor").innerHTML += "</table><br>";
            }
            else {
                console.log("No hay asignaturas.");
            }
        }
        
    });
}
//Datos de la asignatura.
export const verAsignatura = async (profe, nombre) => {
    const asignaturasLista = await getDocs(asignaturas);
    asignaturasLista.docs.map((documento) => {
        for (var i = 0; i < nombre.length; i++){
            if(documento.data().nombre == nombre[i] && (documento.data().profesor == profe)){
                d.getElementById("tablaAsignaturas").innerHTML += "<tr><td id='"+documento.data().nombre+"'></td><td>"+documento.data().nombre+"</td></tr>";
                buscarAsignatura(documento.data().nombre);
            }
            else {
                console.log("No hay asignaturas.");
            }
        }
    });
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