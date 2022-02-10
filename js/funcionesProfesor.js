"use strict";
import { verAlumnos, verAsignatura } from "../includes/asignaturas.js";
import * as f from "../includes/funciones.js";
import { editarProfesor } from "../includes/profesores.js";
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
        verAlumnos(profesor.id,profesor.asignatura);
    }, false);

    d.getElementById("perfil").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarPerfilProfesor();
        //Perfil
        d.getElementById("nombre").value = profesor.nombre;
        d.getElementById("email").value = profesor.email;
        d.getElementById("apellido1").value = profesor.apellido1;
        d.getElementById("apellido2").value = profesor.apellido2;
        d.getElementById("editarDatos").addEventListener("click", () => {
            d.getElementById("nombre").removeAttribute("disabled");
            d.getElementById("apellido1").removeAttribute("disabled");
            d.getElementById("apellido2").removeAttribute("disabled");
            d.getElementById("editarDatosConf").removeAttribute("hidden");
            d.getElementById("editarDatos").setAttribute("hidden","true");
            d.getElementById("editarDatosConf").addEventListener("click", () => {
                editarProfesor(profesor.id,d.getElementById("nombre").value,d.getElementById("apellido1").value,d.getElementById("apellido2").value);
                d.getElementById("editarDatos").removeAttribute("hidden");
                d.getElementById("editarDatosConf").setAttribute("hidden","true");
                d.getElementById("nombre").setAttribute("disabled","true");
                d.getElementById("apellido1").setAttribute("disabled","true");
                d.getElementById("apellido2").setAttribute("disabled","true");
            },false);
        },false);
        //Asignaturas
        d.getElementById("tablaAsignaturas").innerHTML = "";
        verAsignatura(profesor.id,profesor.asignatura);
        
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