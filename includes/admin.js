"use strict";
import * as admin from "../js/funcionesAdmi.js";
import * as profe from "../includes/profesores.js";
import * as pintar from "../js/plantillas.js";
var d = document;


export const esAdmin = async () => {
    admin.pintarMenu(pintar);
    profe.mostrarProfesores();
    d.getElementById("footer").innerHTML = pintar.pintarFooter();
}