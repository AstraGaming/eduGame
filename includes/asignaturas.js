"use strict";
import { app, autentificacion } from "../js/datosConexion.js";
import * as plantilla from "../js/plantillas.js";
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
import { buscarAlumno } from "./alumnos.js";
/** Conexión con la base de datos. **/
const db = getFirestore(app);
var d = document;
const asignaturas = collection(db, "asignaturas");
const alumnos = collection(db, "alumnos");

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
};

//Datos de la asignatura para mostrar alumnos (profesor).
export const verAlumnos = async (idProfesor, curso, nombreAsignatura) => {
    const consulta = query(
        asignaturas,
        where("profesor", "==", idProfesor),
        where("curso", "==", curso),
        where("nombre", "==", nombreAsignatura),
    );
    const asignas = await getDocs(consulta);

    document.getElementById("alumnosTabla").innerHTML = "";
    for (let i = 0; i < asignas.docs[0].data().alumnos.length; i++) {
        actualizarAlumnoTabla(asignas.docs[0].data().alumnos[i].trim());
    }
};
const actualizarAlumnoTabla = async (id) => {
    const refAlumno = await doc(alumnos, id);
    var alu = await getDoc(refAlumno);
    d.getElementById("alumnosTabla").innerHTML += plantilla.pintarLineaAlumnoTabla(alu.data().nombre, alu.data().apellido1, alu.data().apellido2);
};

//Datos de la asignatura.
export const verAsignatura = async (idProfe, nombre) => {
    const asignaturasLista = await getDocs(asignaturas);
    asignaturasLista.docs.map((documento) => {
        for (var i = 0; i < nombre.length; i++) {
            if (documento.data().id == nombre[i] && (documento.data().profesor == idProfe)) {
                d.getElementById("tablaAsignaturas").innerHTML += "<tr><td id='" + documento.data().id + "Curso'></td><td>" + documento.data().nombre + "</td></tr>";
                buscarAsignatura(documento.data().id, "Curso");
            }
            else {
                console.log("No hay asignaturas.");
            }
        }
    });
}

//Editar datos asignatura.
export const editarAsignatura = async (nombre) => {
    try {
        const asignatura = await doc(asignaturas, nombre);
        await updateDoc(asignatura, {
            nombre: nombre,
            //Añadimos lo que queramos editar.
        });

    }
    catch {
        console.log("Ha habido algún error al editar.")
    }

}

//Añadir palabra a disscionario de la asignatura.
export const buscarIDDiccionario = async (idProfesor, curso, nombreAsignatura, tipo, palabra) => {
    try {
        const consulta = query(
            asignaturas,
            where("profesor", "==", idProfesor),
            where("curso", "==", curso),
            where("nombre", "==", nombreAsignatura),
        );
        const asignatura = await getDocs(consulta);

        actualizarColeccion(asignatura.docs[0].id, palabra, tipo);

    }
    catch {
        console.log("Ha habido algún error al buscar el id del diccionario.")
    }

}
const actualizarColeccion = async (id, palabra, tipo) => {
    try{
        const pruebaRef = await doc(asignaturas, id);
        if(tipo == "anadir"){
            await updateDoc(pruebaRef, {
                diccionario: arrayUnion(palabra),
            });
        }else{
            await updateDoc(pruebaRef, {
                diccionario: arrayRemove(palabra),
            });
        }

    }catch{
        console.log("Ha habido algún error al actualizar una palabra en el diccionario.");
    }
};