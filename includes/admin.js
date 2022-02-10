"use strict";
import * as admin from "../js/funcionesAdmi.js";
import * as pintar from "../js/plantillas.js";
var d = document;


export const esAdmin = async () => {
    admin.pintarMenu(pintar);
    admin.cargarProfesores(pintar);
    d.getElementById("footer").innerHTML = pintar.pintarFooter();
}