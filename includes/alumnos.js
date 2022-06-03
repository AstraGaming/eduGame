"use strict";
import * as pintar from "../js/plantillas.js";
import * as alu from "../js/funcionesAlumno.js";
import * as wordle from "./wordle.js";

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
import { cerrarSesion } from "./funciones.js";

/** Conexión con la base de datos. **/
const db = getFirestore(app);
var d = document;
const alumnos = collection(db, "alumnos");
const asignaturas = collection(db, "asignaturas");

//Crear dato en la lista alumnos.
/* LO DEJAREMOS PARA LA PARTE DE ADMIN */
export const crearAlumnoAdmi = async (nombreR, ape1, ape2, emailR) => {
    /** Obtenemos la fecha y hora actuales al crear el profesor. */
    var hoy = new Date();
    var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

    const nuevoAlumno = {
        nombre: nombreR,
        apellido1: ape1,
        apellido2: ape2,
        email: emailR,
        id: "", 
        fCreacion: fecha + ' ' + hora,
        rol: 0,
    };

    guardarAlumno(nuevoAlumno);
    mostrarAlumnos();
}
//Buscar alumno y actualizar datos de registro, y creamos la cuenta en Auth.
export const crearAlumnoRegistro = async (nombre, ape1, ape2, email, pass) => {
    const alumnosLista = await getDocs(alumnos);
    alumnosLista.docs.map((documento) => {
        if(documento.data().email == email){
            createUserWithEmailAndPassword(autentificacion, email, pass)
                  .then((credenciales) => {
                    actualizarAlumno(documento.data().id,nombre,ape1,ape2);
                  })
                  .catch((error) => {
                    console.log("error al crear usuario");
                    message("Error al crear usuario.", "mal", 3000);
                  });
        }
        else {
            message("No se permite el registro.", "mal", 3000);
        }
    });
}
//Ver todo el alumnado.
export const mostrarAlumnos = async () => {
    d.getElementById("contenido").innerHTML = pintar.pintarAlumnosAdmi();
    d.getElementById("alumnado").innerHTML = "";
    const alumnosLista = await getDocs(alumnos);
    alumnosLista.docs.map((documento) => {
        d.getElementById("alumnado").innerHTML += "<tr id="+documento.id+"><td>"+documento.data().nombre+"</td><td>"+documento.data().apellido1+"</td><td>"+documento.data().apellido2+"</td><td><input type='button' value='Editar' name='editar'></td><td><input type='button' value='Eliminar' name='eliminar'></td></tr>";
    });

    // Crear el formulario y llama a la función para añadir un alumno.
    d.getElementById("anadir").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = pintar.pintarFormuAnadirUsuario("alumno");

        d.getElementById("anadirUsuarioNuevo").addEventListener("click", () => {
            var nombre = d.getElementById("nombreUsu").value;
            var apellido1 = d.getElementById("apellido1").value;
            var apellido2 = d.getElementById("apellido2").value;
            var email = d.getElementById("email").value;
            if( nombre == "" || apellido1 == "" || apellido2 == "" || email == ""){
                console.log("Error, algún campo está vacío.");
            }else{
                crearAlumnoAdmi(nombre, apellido1, apellido2, email);
            }
        }, false);
    }, false);

    
    var botonesEditar = d.getElementsByName("editar");
    var botonesEliminar = d.getElementsByName("eliminar");

    // Editar el alumno.
    botonesEditar.forEach((boton) => {
        var hijos = boton.parentNode.parentNode.childNodes;
        var nombre = hijos[0].innerText;
        var ape1 = hijos[1].innerText;
        var ape2 = hijos[2].innerText;
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = pintar.pintarFormuEditarUsuario("alumno", nombre, ape1, ape2);
            d.getElementById("editarUsu").addEventListener("click", () => {
                var id = boton.parentNode.parentNode.id;
                var nombreNuevo = d.getElementById("nombreUsu").value;
                var ape1Nuevo = d.getElementById("apellido1").value;
                var ape2Nuevo = d.getElementById("apellido2").value;
                actualizarAlumno(id, nombreNuevo, ape1Nuevo, ape2Nuevo);
                mostrarAlumnos();
            }, false);
        });
    });

    // Borrar el alumno.
    botonesEliminar.forEach((boton) => {
        var idAlumno = boton.parentNode.parentNode.id;
        var nombreAlumno = boton.parentNode.parentNode.firstChild.innerText;
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = pintar.pintarConfirmarEliminar(nombreAlumno);
            d.getElementById("confirmarEliminar").addEventListener("click", () => {
                eliminarAlumno(idAlumno);
                mostrarAlumnos();
            });
        });
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
}
//Buscar alumno para mostrar en lista.
export const buscarAlumno = async (id, idAsignatura) => {
    const alumnosLista = await getDocs(alumnos);
    alumnosLista.docs.map((documento) => {
        if(documento.data().id == id){
            d.getElementById(idAsignatura).innerHTML += "<tr class="+documento.data().id+"><td>"+documento.data().nombre+"</td><td>"+documento.data().apellido1+"</td><td>"+documento.data().apellido2+"</td></tr>";
        }
        else {
            console.log("No se encuentra al alumno para listar.");
        }
    });
}
//Es un alumno.
export const esAlumno = async (email) => {
    const alumnosLista = await getDocs(alumnos);
    alumnosLista.docs.map((documento) => {
        if(documento.data().email == email){
            alu.pintarMenu(pintar, documento.data());
        }
        else {
            console.log("No es un alumno.");
        }
    });
}

// Añadir alumno.
export const guardarAlumno = async (alumno) => {
    try{
        const aluAwait = await addDoc(alumnos, alumno);
        actualizarIDAlumno(aluAwait.id);
    }
    catch{
        console.log("Ha habido un problema al intentar añadir el alumno.");
    }
};

// Editar alumno.
export const actualizarAlumno = async (id, nombreR, ape1, ape2) => {
    try{
        const pruebaRef = await doc(alumnos, id);
        await updateDoc(pruebaRef, {
          nombre: nombreR,
          apellido1: ape1,
          apellido2: ape2,
        });
    }
    catch{
        console.log("Ha habido un problema al intentar editar el alumno.");
    }
};
const actualizarIDAlumno = async (id) => {
    try{
        const pruebaRef = await doc(alumnos, id);
        await updateDoc(pruebaRef, {
          id: id,
        });
    }
    catch{
        console.log("Ha habido un problema al intentar editar el id del alumno.");
    }
};

// Eliminar alumno.
export const eliminarAlumno = async (id) => {
    try{
        await deleteDoc(doc(alumnos, id));
    }
    catch{
        console.log("Ha habido un problema al intentar eliminar el alumno.");
    }
}

export const verAsignaturasAlumnoPerfil = async () => {
    var idAlumno = d.getElementById("idAlumno").innerHTML.trim();

    var asignaturasAlumno = d.getElementById("asignatura");
    asignaturasAlumno.innerHTML = "";
    const asignaturasRef = await getDocs(asignaturas);
    asignaturasRef.docs.map((documento) => {
        for (let i = 0; i < documento.data().alumnos.length; i++) {
            if(documento.data().alumnos[i].trim() == idAlumno) {
                asignaturasAlumno.innerHTML += pintar.pintarLineaAsignaturaAlumno(documento.data().curso, documento.data().nombre);
            }
        }
    });   
};

export const verAsignaturasAlumno = async () => {
    var idAlumno = d.getElementById("idAlumno").innerHTML.trim();

    var asignaturasAlumno = d.getElementById("asignatura");
    asignaturasAlumno.innerHTML = "";
    const asignaturasRef = await getDocs(asignaturas);
    asignaturasRef.docs.map((documento) => {
        for (let i = 0; i < documento.data().alumnos.length; i++) {
            if(documento.data().alumnos[i].trim() == idAlumno) {
                asignaturasAlumno.innerHTML += pintar.pintarLineaAsignaturaWordleAlumno(documento.data().curso, documento.data().nombre);
            }
        }
    });   

    var asignaturas3 = document.getElementsByClassName("asignatura");
    d.getElementById("cursoActual").innerHTML = asignaturas3[0].firstChild.firstChild.innerHTML;
    d.getElementById("asignaturaActual").innerHTML = asignaturas3[0].firstChild.lastChild.innerHTML;
    recogerPalabrasAsignatura(asignaturas3[0].firstChild.firstChild.innerHTML.trim(), asignaturas3[0].firstChild.lastChild.innerHTML.trim());

    for (let i = 0; i < asignaturas3.length; i++) {
        asignaturas3[i].addEventListener("click", () => {
            d.getElementById("cursoActual").innerHTML = asignaturas3[i].firstChild.firstChild.innerHTML;
            d.getElementById("asignaturaActual").innerHTML = asignaturas3[i].firstChild.lastChild.innerHTML;

            recogerPalabrasAsignatura(asignaturas3[i].firstChild.firstChild.innerHTML.trim(), asignaturas3[i].firstChild.lastChild.innerHTML.trim());
        }, false);
    }
};

// Activar el diccionario de un curso y asignatura concretos [WORDLE].
export const recogerPalabrasAsignatura = async ( curso, nombreAsignatura) => {
    const consulta = query(
        asignaturas,
        where("curso", "==", curso),
        where("nombre", "==", nombreAsignatura),
    );
    const palabrasConsulta = await getDocs(consulta);

    wordle.iniciarWordles();
    wordle.vaciarDiccionario();

    for (let i = 0; i < palabrasConsulta.docs[0].data().diccionario.length; i++) {
        wordle.anadirPalabraDiccionario(palabrasConsulta.docs[0].data().diccionario[i]);
    }
    wordle.reiniciarWordle();
};


// Mensaje informativo.
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