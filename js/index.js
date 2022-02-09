"use strict";
import * as plantillas from "./plantillas.js";
import * as login from "./funcionesLogin.js";
import * as profesor from "./funcionesProfesor.js";
import * as admi from "./funcionesAdmi.js";

import * as f from "../includes/funciones.js";
import * as alu from "../includes/alumnos.js";
import * as prof from "../includes/profesores.js"

var d = document;

window.onload = () =>{

    // Pintamos y activamos el dinamismo del login --> Importante activarlo cada vez que pintemos el login (¡Son inseparables!).
    login.pintar(plantillas);



    /******* INICIAR SESIÓN **********/
    //Evento onclick para el botón "Iniciar" de la parte de Iniciar sesión.
    d.getElementById("iniciarSesion").addEventListener("click", () =>{
        f.iniciarSesion(d.getElementById("emailS").value, d.getElementById("passS").value);
    });




    /** INICIO --> Para profesores */
        /** Activamos el menú. */
        //profesor.pintarMenu(plantillas);

        /** Cargamos los juegos. */
        //d.getElementById("contenido").innerHTML = plantillas.pintarJuegos();

        /** Pintamos el pie de página. */
        //d.getElementById("footer").innerHTML = plantillas.pintarFooter();
    /** FIN --> Para profesores */

    /** INICIO --> Para admi */
        /** Se activa su menú. */
        //admi.pintarMenu(plantillas);
    /** FIN --> Para admi */
};