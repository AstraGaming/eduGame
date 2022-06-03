"use strict";
import * as f from "../includes/funciones.js";
import { iniciarAsignaturasAlumnosProfesor, verAsignaturasProfesor } from "../includes/profesores.js";
import * as wordle from "../includes/wordle.js";
var d = document;

export const pintarMenu = (plantillas, profesor) => {
    d.getElementById("header").innerHTML = plantillas.pintarMenuProfesor(profesor.id);

    d.getElementById("juegos").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarJuegos();

        // Juego wordle sin implementar.
        d.getElementById("wordle").addEventListener("click", () => {
            wordle.activarWordleProfesor();
        }, false);
         // Juego akinator sin implementar.
        d.getElementById("akinator").addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = plantillas.mantenimiento();
        }, false);
    }, false);

    d.getElementById("alumnos").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarAlumnos();
        iniciarAsignaturasAlumnosProfesor();
    }, false);

    d.getElementById("perfil").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarPerfilProfesor();

        d.getElementById("nombre").value = profesor.nombre;
        d.getElementById("email").value = profesor.email;
        d.getElementById("apellido1").value = profesor.apellido1;
        d.getElementById("apellido2").value = profesor.apellido2;

        //Asignaturas
        verAsignaturasProfesor();
        
    }, false);

    d.getElementById("cerrarSesion").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarCerrarSesion();

        d.getElementById("confirmarCerrarSesion").addEventListener("click", () => {
            f.cerrarSesion();
        }, false);
    }, false);
};