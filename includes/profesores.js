"use strict";
import * as profe from "../js/funcionesProfesor.js";
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
const profesores = collection(db, "profesores");

//Crear dato en la lista profesores.
/* LO DEJAREMOS PARA LA PARTE DE ADMIN */
export const crearProfesor = async (nombre, ape1, ape2, email, fecha, id, rol) => {
    array = new Array("");
    const nuevoProfesor = {
        nombre: nombre,
        apellido1: ape1,
        apellido2: ape2,
        email: email,
        fCreacion: fecha,
        rol: rol,
        id: id,
        asignaturas: array,
    };

    const listaProf = await addDoc(profesores, nuevoProfesor);
    console.log(`Nuevo alumno creado con id ${listaProf.id} en la lista`);
    location.reload();
}
//Crear profesor desde admin.
export const crearProfesorAdmin = async (nombre, ape1, ape2, email,rol) => {
    const nuevoProfesor = {
        nombre: nombre,
        apellido1: ape1,
        apellido2: ape2,
        email: email,
        rol: rol,
    };

    const listaProf = await addDoc(profesores, nuevoProfesor);
    console.log(`Nuevo alumno creado con id ${listaProf.id} en la lista`);
}
//Buscar profesor y actualizar datos de registro, y crear usuario Auth.
export const crearProfesorRegistro = async (email,pass) => {
    const profesoresLista = await getDocs(profesores);
    profesoresLista.docs.map((documento) => {
        if(documento.data().email == email){
            createUserWithEmailAndPassword(autentificacion, email, pass)
                  .then((credenciales) => {
                   console.log("actualizamos al profesor con los datos nuevos.");
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
//Datos del profesor.
export const verProfesor = async (id) => {
    const consulta = query(
        profesores,
        where("id", "==", id)
    );
    const profesor = await getDocs(consulta);
    var nombre=profesor.docs[0].data().nombre;
    var apellidos=profesor.docs[0].data().apellido1+" "+profesor.docs[0].data().apellido2;
    var email=profesor.docs[0].data().email;
    var fCreacion=profesor.docs[0].data().fCreacion;

    console.log(nombre+" "+apellidos+" "+email+" "+fCreacion);
}
//Ver todo el profesorado --> Para el usuario admin.
export const mostrarProfesoresAdmi = async () => {
    d.getElementById("contenido").innerHTML = pintar.pintarProfesoresAdmi();
    d.getElementById("profesorado").innerHTML = "";
    const profesoresLista = await getDocs(profesores);
    profesoresLista.docs.map((documento) => {
        d.getElementById("profesorado").innerHTML += "<tr id="+documento.data().id+"><td>"+documento.data().nombre+"</td><td>"+documento.data().apellido1+"</td><td>"+documento.data().apellido2+"</td><td><input type='button' value='Editar' name='editar'></td><td><input type='button' value='Eliminar' name='eliminar'></td></tr>";
    });

    d.getElementById("anadir").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = pintar.pintarFormuAnadirUsuario();

        d.getElementById("anadirUsuarioNuevo").addEventListener("click", () => {
            if(d.getElementById("esMaestro").checked){
                console.log("si");
                var rol = 1;
                console.log(d.getElementById("nombreUsu").value,d.getElementById("apellido1").value,d.getElementById("apellido2").value,d.getElementById("email").value,rol);
                crearProfesorAdmin(d.getElementById("nombreUsu").value,d.getElementById("apellido1").value,d.getElementById("apellido2").value,d.getElementById("email").value,rol);
            }
            else {
                var rol = 0;
                console.log("no");
                console.log(d.getElementById("nombreUsu").value,d.getElementById("apellido1").value,d.getElementById("apellido2").value,d.getElementById("email").value,rol);
                crearAlumnoAdmin(d.getElementById("nombreUsu").value,d.getElementById("apellido1").value,d.getElementById("apellido2").value,d.getElementById("email").value,rol);
            }
        }, false);
    }, false);


    var botonesEditar = d.getElementsByName("editar");
    var botonesEliminar = d.getElementsByName("eliminar");

    botonesEditar.forEach((boton) => {
        boton.addEventListener("click", () => {
            console.log(boton);
            d.getElementById("contenido").innerHTML = pintar.pintarFormuEditarUsuario();
        });
    });

    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", () => {
            var idProfesor = boton.parentNode.parentNode.id;
            var nombreProfesor = boton.parentNode.parentNode.firstChild.innerText;
            d.getElementById("contenido").innerHTML = pintar.pintarConfirmarEliminar(nombreProfesor);
            d.getElementById("confirmarEliminar").addEventListener("click", () => {
                eliminarProfesor(idProfesor);
                mostrarProfesoresAdmi();
            });
        });
    });
}
// Es profesor.
export const esProfesor = async (email) => {
    const profesoresLista = await getDocs(profesores);
    profesoresLista.docs.map((documento) => {
        if(documento.data().email == email){
            profe.pintarMenu(pintar,documento.data());
            d.getElementById("contenido").innerHTML = pintar.pintarJuegos();
            d.getElementById("footer").innerHTML = pintar.pintarFooter();
        }
        else {
            console.log("No es profesor.");
        }
    });
}

//Editar datos profesor.
export const editarProfesor = async (id,nombre,ape1,ape2) =>{
    try{
        const profesor = await doc(profesores, id);
        await updateDoc(profesor, {
            nombre: nombre,
            apellido1: ape1,
            apellido2: ape2
          });
        
    }
    catch{
        console.log("Ha habido algún error al editar.")
    }
        
}

const eliminarProfesor = async (id) => {
    try{
        await deleteDoc(doc(profesores, id));  
        console.log("Profesor eliminado con éxito.");     
    }
    catch{
        console.log("Ha habido algún error al intentar eliminar el profesor.")
    }
};