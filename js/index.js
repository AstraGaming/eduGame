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
<<<<<<< HEAD
    /******** REGISTRO **********/
    //Como ya habrá información en la BBDD, al registrarse se completará ciertos valores y 
    //se comprobará que el usuario esté en la BBDD, para que no pueda registrarse cualquier persona.
    d.getElementById("crearCuenta").addEventListener("click", () => {
        var rol = 0;
        if (d.getElementById("maestro").checked) rol = 1;
        f.crearCuenta(d.getElementById("usuN").value,d.getElementById("emailN").value, d.getElementById("passN").value,rol);
    });
=======


>>>>>>> 3ec5247cf1c541345ad5d490c2369aabb591e8d3


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