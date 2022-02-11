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
//Crear profesor desde admin. 
export const crearProfesorAdmi = (nombreR, ape1, ape2, emailR) => {
    /** Obtenemos la fecha y hora actuales al crear el profesor. */
    var hoy = new Date();
    var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

    const nuevoProfesor = {
        nombre: nombreR,
        apellido1: ape1,
        apellido2: ape2,
        email: emailR,
        fCreacion: fecha + ' ' + hora,
        rol: 1,
        asignaturas: [],
    };

    guardarProfesor(nuevoProfesor);
    mostrarProfesores();
}

//Buscar profesor y actualizar datos de registro, y crear usuario Auth.
export const crearProfesorRegistro = async (nombre, ape1, ape2, email, pass) => {
    const profesoresLista = await getDocs(profesores);
    profesoresLista.docs.map((documento) => {
        if(documento.data().email == email){
            createUserWithEmailAndPassword(autentificacion, email, pass)
                  .then((credenciales) => {
                    editarProfesor(documento.data().id,nombre,ape1,ape2);
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

//Ver todo el profesorado.
export const mostrarProfesores = async () => {
    d.getElementById("contenido").innerHTML = pintar.pintarProfesoresAdmi();
    d.getElementById("profesorado").innerHTML = "";
    const profesoresLista = await getDocs(profesores);
    profesoresLista.docs.map((documento) => {
        d.getElementById("profesorado").innerHTML += "<tr id="+documento.id+"><td>"+documento.data().nombre+"</td><td>"+documento.data().apellido1+"</td><td>"+documento.data().apellido2+"</td><td><input type='button' value='Editar' name='editar'></td><td><input type='button' value='Eliminar' name='eliminar'></td></tr>";
    });

    // Crear el formulario y llama a la función para añadir un profesor.
    d.getElementById("anadir").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = pintar.pintarFormuAnadirUsuario("profesor");

        d.getElementById("anadirUsuarioNuevo").addEventListener("click", () => {
            var nombre = d.getElementById("nombreUsu").value;
            var apellido1 = d.getElementById("apellido1").value;
            var apellido2 = d.getElementById("apellido2").value;
            var email = d.getElementById("email").value;
            if( nombre == "" || apellido1 == "" || apellido2 == "" || email == ""){
                console.log("Error, algún campo está vacío.");
            }else{
                crearProfesorAdmi(nombre, apellido1, apellido2, email);
            }
        }, false);
    }, false);

    
    var botonesEditar = d.getElementsByName("editar");
    var botonesEliminar = d.getElementsByName("eliminar");

    // Editar el profesor.
    botonesEditar.forEach((boton) => {
        var hijos = boton.parentNode.parentNode.childNodes;
        var nombre = hijos[0].innerText;
        var ape1 = hijos[1].innerText;
        var ape2 = hijos[2].innerText;
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = pintar.pintarFormuEditarUsuario("profesor", nombre, ape1, ape2);
            d.getElementById("editarUsu").addEventListener("click", () => {
                var id = boton.parentNode.parentNode.id;
                var nombreNuevo = d.getElementById("nombreUsu").value;
                var ape1Nuevo = d.getElementById("apellido1").value;
                var ape2Nuevo = d.getElementById("apellido2").value;
                actualizarProfesor(id, nombreNuevo, ape1Nuevo, ape2Nuevo);
                mostrarProfesores();
            }, false);
        });
    });

    // Borrar el profesor.
    botonesEliminar.forEach((boton) => {
        var idProfesor = boton.parentNode.parentNode.id;
        var nombreProfesor = boton.parentNode.parentNode.firstChild.innerText;
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = pintar.pintarConfirmarEliminar(nombreProfesor);
            d.getElementById("confirmarEliminar").addEventListener("click", () => {
                eliminarProfesor(idProfesor);
                mostrarProfesores();
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
            d.getElementById("wordle").addEventListener("click", () => {
                d.getElementById("contenido").innerHTML = pintar.mantenimiento();
            }, false);
             // Juego akinator sin implementar.
            d.getElementById("akinator").addEventListener("click", () => {
                d.getElementById("contenido").innerHTML = pintar.mantenimiento();
            }, false);
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
        location.reload();
    }
    catch{
        console.log("Ha habido algún error al editar.")
    }
        
}

// Añadir profesor.
export const guardarProfesor = async (profesor) => {
    try{
        await addDoc(profesores, profesor);
    }
    catch{
        console.log("Ha habido un problema al intentar añadir el profesor.");
    }
};

// Editar profesor.
export const actualizarProfesor = async (id, nombreR, ape1, ape2) => {
    try{
        const pruebaRef = await doc(profesores, id);
        await updateDoc(pruebaRef, {
          nombre: nombreR,
          apellido1: ape1,
          apellido2: ape2,
        });
        
    }
    catch{
        console.log("Ha habido un problema al intentar editar el profesor.");
    }
};

// Eliminar profesor.
export const eliminarProfesor = async (id) => {
    try{
        await deleteDoc(doc(profesores, id));
    }
    catch{
        console.log("Ha habido un problema al intentar eliminar el profesor.");
    }
}
