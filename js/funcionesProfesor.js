"use strict";
import { verAlumnos, verAsignatura } from "../includes/asignaturas.js";
import * as f from "../includes/funciones.js";
var d = document;

export const pintarMenu = (plantillas, profesor) => {
    d.getElementById("header").innerHTML = plantillas.pintarMenuProfesor();

    d.getElementById("juegos").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarJuegos();
    }, false);

    d.getElementById("alumnos").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarAlumnos();
        d.getElementById("alumnosProfesor").innerHTML = "<h1>Alumnos</h1>";
        //Obtenemos las asignaturas que imparte el profesor y las mostramos junto con el curso y los alumnos.
        verAlumnos(profesor.nombre,profesor.asignatura);
    }, false);

    d.getElementById("perfil").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarPerfilProfesor();
        //Perfil
        d.getElementById("nombre").value = profesor.nombre;
        d.getElementById("email").value = profesor.email;
        d.getElementById("apellido1").value = profesor.apellido1;
        d.getElementById("apellido2").value = profesor.apellido2;

        //Asignaturas
        d.getElementById("tablaAsignaturas").innerHTML = "";
        verAsignatura(profesor.nombre,profesor.asignatura);
        
    }, false);

    d.getElementById("cerrarSesion").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarCerrarSesion();

        d.getElementById("confirmarCerrarSesion").addEventListener("click", () => {
            f.cerrarSesion();
        }, false);
    }, false);
};

/*const cargarJuegos = () => {};
const cargarAlumnos = () => {};
const cargarPerfil = () => {};
const cerrarSesion = () => {};*/