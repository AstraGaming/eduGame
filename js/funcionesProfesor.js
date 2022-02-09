"use strict";
var d = document;

export const pintarMenu = (plantillas) => {
    d.getElementById("header").innerHTML = plantillas.pintarMenuProfesor();

    d.getElementById("juegos").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarJuegos();
    }, false);

    d.getElementById("alumnos").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarAlumnos();
    }, false);

    d.getElementById("perfil").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarPerfilProfesor();
    }, false);

    d.getElementById("cerrarSesion").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarCerrarSesion();

        d.getElementById("confirmarCerrarSesion").addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = "<p>Pero que tontooo</p>";
        }, false);
    }, false);
};

/*const cargarJuegos = () => {};
const cargarAlumnos = () => {};
const cargarPerfil = () => {};
const cerrarSesion = () => {};*/