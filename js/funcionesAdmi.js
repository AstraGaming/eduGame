"use strcit";
var d = document;
import { crearAlumnoAdmin, mostrarAlumnos } from "../includes/alumnos.js";
import * as f from "../includes/funciones.js";
import { crearProfesorAdmin, mostrarProfesores } from "../includes/profesores.js";

export const pintarMenu = (plantillas) => {
    d.getElementById("header").innerHTML = plantillas.pintarMenuAdmi();

    /** Muestra todos los profesores. */
    d.getElementById("profesores").addEventListener("click", () => {
        cargarProfesores(plantillas);


    }, false);

    /** Muestra todos lo alumnos. */
    d.getElementById("alumnos").addEventListener("click", () => {
        cargarAlumnos(plantillas);
    }, false);

    /** Muestra las asignaturas. */
    d.getElementById("asignaturas").addEventListener("click", () => {
        cargarAsignaturas(plantillas);
    }, false);

    /** Te lleva a cerrar la sesión de admi. */
    d.getElementById("cerrarSesion").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarCerrarSesion();

        d.getElementById("confirmarCerrarSesion").addEventListener("click", () => {
            f.cerrarSesion();
        }, false);
    }, false);
};


const cargarProfesores = (plantillas) => {
    d.getElementById("contenido").innerHTML = plantillas.pintarProfesoresAdmi();

    d.getElementById("profesorado").innerHTML = "";
    mostrarProfesores();

    d.getElementById("anadir").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarFormuAnadirUsuario();

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
            d.getElementById("contenido").innerHTML = plantillas.pintarFormuEditarUsuario();
        });
    });

    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarEliminar();
            d.getElementById("confirmarEliminar").addEventListener("click", () => {
                d.getElementById("contenido").innerHTML = "ALGUIEN HA SIDO ELIMINADO";
            });
        });
    });
};

const cargarAlumnos = (plantillas) => {
    d.getElementById("contenido").innerHTML = plantillas.pintarAlumnosAdmi();

    d.getElementById("alumnado").innerHTML = "";
    mostrarAlumnos();


    d.getElementById("anadir").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarFormuAnadirUsuario();
    }, false);

    var botonesEditar = d.getElementsByName("editar");
    var botonesEliminar = d.getElementsByName("eliminar");

    botonesEditar.forEach((boton) => {
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = plantillas.pintarFormuEditarUsuario();
        });
    });

    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarEliminar();
            d.getElementById("confirmarEliminar").addEventListener("click", () => {
                cerrarSesion();
            });
        });
    });
};

const cargarAsignaturas = (plantillas) => {
    d.getElementById("contenido").innerHTML = "asignaturas";
};

const cerrarSesion = () => {
    d.getElementById("contenido").innerHTML = "ALGUIEN HA SIDO ELIMINADO";
};