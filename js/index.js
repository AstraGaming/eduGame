"use strict";
import * as plantillas from "./plantillas.js";
import * as login from "./funcionesLogin.js";
import * as profesor from "./funcionesProfesor.js";
import * as admi from "./funcionesAdmi.js";

import * as f from "../includes/funciones.js";
import * as alu from "../includes/alumnos.js";
import * as prof from "../includes/profesores.js"

var d = document;

window.onload = () => {

    d.getElementById("header").innerHTML = plantillas.pintarMenuPrincipal();

    d.getElementById("contenido").innerHTML = plantillas.pintarPaginaPrincipal();

    d.getElementById("footer").innerHTML = plantillas.pintarFooter();

    d.getElementById("acceder").addEventListener("click", () => {
        login.pintar(plantillas);

        /******* INICIAR SESIÓN **********/
        //Evento onclick para el botón "Iniciar" de la parte de Iniciar sesión.
        d.getElementById("iniciarSesion").addEventListener("click", () => {
            f.iniciarSesion(d.getElementById("emailS").value, d.getElementById("passS").value);
        });
        /******** REGISTRO **********/
        //Como ya habrá información en la BBDD, al registrarse se completará ciertos valores y 
        //se comprobará que el usuario esté en la BBDD, para que no pueda registrarse cualquier persona.
        d.getElementById("crearCuenta").addEventListener("click", () => {
            var rol = 0;
            if (d.getElementById("maestro").checked) rol = 1;
            f.crearCuenta(d.getElementById("usuN").value, d.getElementById("ape1N").value, d.getElementById("ape2N").value, d.getElementById("emailN").value, d.getElementById("passN").value, rol);
        });
    });

};