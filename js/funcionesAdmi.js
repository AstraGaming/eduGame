"use strcit";
var d = document;

export const pintarMenu = (plantillas) => {
    d.getElementById("header").innerHTML = plantillas.pintarMenuAdmi();

    /** Muestra todos los profesores. */
    d.getElementById("profesores").addEventListener("click", () => {
        cargarProfesores(plantillas);
    }, false);

    /** Muestra todos lo alumnos. */
    d.getElementById("alumnos").addEventListener("click", () => {
        cargarAlumnos(plantillas);
    }, false);

    /** Muestra las asignaturas. */
    d.getElementById("asignaturas").addEventListener("click", () => {
        cargarAsignaturas(plantillas);
    }, false);

    /** Te lleva a cerrar la sesión de admi. */
    d.getElementById("cerrarSesion").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarCerrarSesion();

        d.getElementById("confirmarCerrarSesion").addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = "<p>Pero que tontooo</p>";
        }, false);
    }, false);
};


const cargarProfesores = (plantillas) => {
    d.getElementById("contenido").innerHTML = plantillas.pintarProfesoresAdmi();

    d.getElementById("anadir").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarFormuAnadirUsuario();
    }, false);

    var botonesEditar = d.getElementsByName("editar");
    var botonesEliminar = d.getElementsByName("eliminar");

    botonesEditar.forEach((boton) => {
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = plantillas.pintarFormuEditarUsuario();
        });
    });

    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarEliminar();
            d.getElementById("confirmarEliminar").addEventListener("click", () => {
                d.getElementById("contenido").innerHTML = "ALGUIEN HA SIDO ELIMINADO";
            });
        });
    });
};

const cargarAlumnos = (plantillas) => {
    d.getElementById("contenido").innerHTML = plantillas.pintarAlumnosAdmi();

    d.getElementById("anadir").addEventListener("click", () => {
        d.getElementById("contenido").innerHTML = plantillas.pintarFormuAnadirUsuario();
    }, false);

    var botonesEditar = d.getElementsByName("editar");
    var botonesEliminar = d.getElementsByName("eliminar");

    botonesEditar.forEach((boton) => {
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = plantillas.pintarFormuEditarUsuario();
        });
    });

    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", () => {
            d.getElementById("contenido").innerHTML = plantillas.pintarConfirmarEliminar();
            d.getElementById("confirmarEliminar").addEventListener("click", () => {
                cerrarSesion();
            });
        });
    });
};

const cargarAsignaturas = (plantillas) => {
    d.getElementById("contenido").innerHTML = "asignaturas";
};

const cerrarSesion = () => {
    d.getElementById("contenido").innerHTML = "ALGUIEN HA SIDO ELIMINADO";
};