"use strcit";
var d = document;
import { crearAlumnoAdmin, mostrarAlumnosAdmi } from "../includes/alumnos.js";
import * as f from "../includes/funciones.js";
import { crearProfesorAdmin, mostrarProfesoresAdmi } from "../includes/profesores.js";

export const pintarMenu = (plantillas) => {
    d.getElementById("header").innerHTML = plantillas.pintarMenuAdmi();

    /** Muestra todos los profesores. */
    d.getElementById("profesores").addEventListener("click", () => {
        mostrarProfesoresAdmi();
    }, false);

    /** Muestra todos lo alumnos. */
    d.getElementById("alumnos").addEventListener("click", () => {
        mostrarAlumnosAdmi();
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

const cargarAsignaturas = (plantillas) => {
    d.getElementById("contenido").innerHTML = "asignaturas";
};

const cerrarSesion = () => {
    d.getElementById("contenido").innerHTML = "ALGUIEN HA SIDO ELIMINADO";
};