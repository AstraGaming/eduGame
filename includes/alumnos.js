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
        fCreacion: fecha + ' ' + hora,
        rol: 0,
    };

    guardarAlumno(nuevoAlumno);
    mostrarAlumnos();
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
//Ver todo el alumnado.
export const mostrarAlumnos = async () => {
    d.getElementById("contenido").innerHTML = pintar.pintarAlumnosAdmi();
    d.getElementById("alumnado").innerHTML = "";
    const alumnosLista = await getDocs(alumnos);
    alumnosLista.docs.map((documento) => {
        d.getElementById("alumnado").innerHTML += "<tr id="+documento.id+"><td>"+documento.data().nombre+"</td><td>"+documento.data().apellido1+"</td><td>"+documento.data().apellido2+"</td><td><input type='button' value='Editar' name='editar'></td><td><input type='button' value='Eliminar' name='eliminar'></td></tr>";
    });

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

    botonesEditar.forEach((boton) => {
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = pintar.pintarFormuEditarUsuario();
        });
    });

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
            console.log("Entramos como alumno");
        }
        else {
            console.log("No es un alumno.");
        }
    });
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
// Añadir alumno.
export const guardarAlumno = async (alumno) => {
    try{
        await addDoc(alumnos, alumno);
    }
    catch{
        console.log("Ha habido un problema al intentar añadir el alumno.");
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