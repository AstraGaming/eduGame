"use strict";
<<<<<<< HEAD
import { verAsignatura } from "../includes/asignaturas.js";
import * as f from "../includes/funciones.js";
var d = document;

export const pintarMenu = (plantillas, profesor) => {
=======
var d = document;

export const pintarMenu = (plantillas) => {
>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3
    d.getElementById("header").innerHTML = plantillas.pintarMenuProfesor();

    d.getElementById("juegos").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarJuegos();
    }, false);

    d.getElementById("alumnos").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarAlumnos();
    }, false);

    d.getElementById("perfil").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarPerfilProfesor();
<<<<<<< HEAD
        //Perfil
        d.getElementById("nombre").value = profesor.nombre;
        d.getElementById("email").value = profesor.email;
        //d.getElementById("apellido1").value = profesor.apellido1;
        //d.getElementById("apellido2").value = profesor.apellido2;

        //Asignaturas
        d.getElementById("tablaAsignaturas").innerHTML = "";
        verAsignatura(profesor.nombre,profesor.asignatura);
        
=======
>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3
    }, false);

    d.getElementById("cerrarSesion").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarCerrarSesion();

        d.getElementById("confirmarCerrarSesion").addEventListener("click", () => {
<<<<<<< HEAD
            f.cerrarSesion();
=======
            d.getElementById("contenido").innerHTML = "<p>Pero que tontooo</p>";
>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3
        }, false);
    }, false);
};

/*const cargarJuegos = () => {};
const cargarAlumnos = () => {};
const cargarPerfil = () => {};
const cerrarSesion = () => {};*/