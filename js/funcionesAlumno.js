"use strict";
import * as f from "../includes/funciones.js";
import * as alus from "../includes/alumnos.js";
import * as wordle from "../includes/wordle.js";
import * as plantillas from "./plantillas.js";
var d = document;

export const pintarMenu = (plantillas, alumno) => {
    d.getElementById("header").innerHTML = plantillas.pintarMenuAlumno(alumno.id);
    aplicarFuncionalidadJuegos();

    d.getElementById("juegos").addEventListener("click", () => {
        aplicarFuncionalidadJuegos();
    }, false);

    d.getElementById("perfil").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarPerfilAlumno();
        
        d.getElementById("nombre").value = alumno.nombre;
        d.getElementById("email").value = alumno.email;
        d.getElementById("apellido1").value = alumno.apellido1;
        d.getElementById("apellido2").value = alumno.apellido2;

        //Asignaturas
        alus.verAsignaturasAlumno();
        
    }, false);

    d.getElementById("cerrarSesion").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarCerrarSesion();

        d.getElementById("confirmarCerrarSesion").addEventListener("click", () => {
            f.cerrarSesion();
        }, false);
    }, false);
};

const aplicarFuncionalidadJuegos = () => {
    d.getElementById("contenido").innerHTML = plantillas.pintarJuegos();

    // Juego wordle sin implementar.
    d.getElementById("wordle").addEventListener("click", () => {
        wordle.iniciarWordles();
    }, false);

     // Juego akinator sin implementar.
    d.getElementById("akinator").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.mantenimiento();
    }, false);
};