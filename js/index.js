"use strict";
import * as f from "../includes/funciones.js";
import * as funcLog from "./funcionalidadLogin.js";
import * as alu from "../includes/alumnos.js";
import * as prof from "../includes/profesores.js"
var d = document;

window.onload = () =>{

    // Activa el dinamismo del login --> Importante activarlo cada vez que pintemos el login (¡Son inseparables!).
    funcLog.activarFuncLogin();


    /******* INICIAR SESIÓN **********/
    //Evento onclick para el botón "Iniciar" de la parte de Iniciar sesión.
    d.getElementById("iniciarSesion").addEventListener("click", () =>{
        f.iniciarSesion(d.getElementById("emailS").value, d.getElementById("passS").value);
    });



    /******* CREAR CUENTA ************/
    //Evento onclick para el botón "Crear" en la parte de Crear cuenta.
    d.getElementById("crearCuenta").addEventListener("click", () =>{
        var rol = 0;
        //Si es profesor.
        if(d.getElementById("maestro").checked){
            rol = 1;
        }
        //Si es alumno.
        else{
            rol = 0;
        }
        f.crearCuenta(d.getElementById("emailN").value, d.getElementById("passN").value,d.getElementById("usuN").value,rol);
        d.getElementById("cCuenta").innerHTML = "<h4>Cuenta creada con éxito!</h4>";
    });




    /******* CERRAR SESIÓN ************/













    /**************** PRUEBAS ******************/
    /*
    d.getElementById("pruebas").addEventListener("click", () =>{
        prof.verProfesor("iJRwah0eW0MmB1gWMKm3vERx7tT2");
    })
    */
};
