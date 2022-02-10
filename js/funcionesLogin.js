"use strict";
var d = document;

export const pintar = (plantillas) => {
    d.getElementById("contenido").innerHTML = plantillas.pintarLogin();
    activarFuncLogin();
};

const activarFuncLogin = () => {
    var loginMsg = d.getElementsByClassName("loginMsg")[0],
        login = d.getElementsByClassName("login")[0],
        signupMsg = d.getElementsByClassName("signupMsg")[0],
        signup = d.getElementsByClassName("signup")[0],
        frontbox = d.getElementsByClassName("frontbox")[0];

    d.getElementById("switch1").addEventListener('click', function () {
        loginMsg.classList.toggle("visibility");
        frontbox.classList.add("moving");
        signupMsg.classList.toggle("visibility");

        signup.classList.toggle("hide");
        login.classList.toggle("hide");
    })

    d.getElementById("switch2").addEventListener('click', function () {
        loginMsg.classList.toggle("visibility");
        frontbox.classList.remove("moving");
        signupMsg.classList.toggle("visibility");

        signup.classList.toggle("hide");
        login.classList.toggle("hide");

    })

    setTimeout(function () {
        d.getElementById("switch1").click();
    }, 1000)

    setTimeout(function () {
        d.getElementById("switch2").click();
    }, 3000)
};