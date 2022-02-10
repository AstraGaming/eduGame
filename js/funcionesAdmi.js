"use strcit";
var d = document;
import { crearAlumnoAdmin, mostrarAlumnos } from "../includes/alumnos.js";
import * as f from "../includes/funciones.js";
import { crearProfesorAdmin, mostrarProfesores } from "../includes/profesores.js";

export const pintarMenu = (plantillas) => {
    d.getElementById("header").innerHTML = plantillas.pintarMenuAdmi();

    /** Muestra todos los profesores. */
    d.getElementById("profesores").addEventListener("click", () => {
        mostrarProfesores();
    }, false);

    /** Muestra todos lo alumnos. */
    d.getElementById("alumnos").addEventListener("click", () => {
        mostrarAlumnos();
    }, false);

    /** Muestra las asignaturas. */
    d.getElementById("asignaturas").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.mantenimiento();
    }, false);

    /** Te lleva a cerrar la sesión de admi. */
    d.getElementById("cerrarSesion").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarCerrarSesion();

        d.getElementById("confirmarCerrarSesion").addEventListener("click", () => {
            f.cerrarSesion();
        }, false);
    }, false);
};