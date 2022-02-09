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
<<<<<<< HEAD
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

=======
}

// Es profesor.
export const esProfesor = async (id) => {
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

>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3
//Editar datos profesor.
export const editarProfesor = async (id,nombre) =>{
    try{
        const profesor = await doc(profesores, id);
        await updateDoc(profesor, {
          nombre: nombre,
        });
        
    }
    catch{
        console.log("Ha habido algún error al editar.")
    }
        
}
