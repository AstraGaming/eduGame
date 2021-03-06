"use strict";

export const pintarLogin = () => {
    return `<div id="login" class="containerLogin">
                <div class="backbox">
                    <div class="loginMsg">
                        <div class="textcontent">
                            <p class="title">¿No tienes una cuenta?</p>
                            <p>Regístrate para poder iniciar sesión.</p>
                            <button id="switch1">Registrarse</button>
                        </div>
                    </div>
                    <div class="signupMsg visibility">
                        <div class="textcontent">
                            <p class="title">¿Ya tienes una cuenta?</p>
                            <p>Inicia sesión para acceder al contenido.</p>
                            <button id="switch2">Iniciar sesión</button>
                        </div>
                    </div>
                </div>
                <!-- backbox -->
                <div class="frontbox">
                    <div class="login">
                        <h2>Iniciar sesión</h2>
                        <div class="inputbox">
                            <input type="text" name="email" placeholder="   EMAIL" id="emailS">
                            <input type="password" name="password" placeholder="    CONTRASEÑA" id="passS">
                        </div>
                        <p id="forgotPassw">¿Has olvidado la contraseña?</p>
                        <button id="iniciarSesion">Iniciar</button>
                    </div>
                    <div class="signup hide">
                        <h2>Crear cuenta</h2>
                        <div class="inputbox">
                            <input type="text" name="fullname" placeholder="    NOMBRE DE USUARIO" id="usuN">
                            <input type="text" name="apellido1" placeholder="    PRIMER APELLIDO" id="ape1N">
                            <input type="text" name="apellido2" placeholder="    SEGUNDO APELLIDO" id="ape2N">
                            <input type="text" name="email" placeholder="   EMAIL" id="emailN">
                            <input type="password" name="password" placeholder="    CONTRASEÑA" id="passN">
                            <p>
                                <label for="maestro">¿Eres maestro? </label>
                                <input type="checkbox" name="maestro" id="maestro">
                            </p>
                        </div>
                        <button id="crearCuenta">Crear</button>
                    </div>
                </div>
            </div>
            <div id="info"></div>`;
};

export const pintarMenuProfesor = (idProfesor) => {
    return `
            <div id="menu">
                <img src="./assets/img/logos/logo.png" alt="EduGame">    
                <label for="toggle-1" class="toggle-menu">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </label>
                <input type="checkbox" id="toggle-1">
                <nav>
                    <ul>
                        <li id="juegos"><a>Juegos</a></li>
                        <li id="alumnos"><a>Mis alumnos</a></li>
                        <li id="perfil"><a>Mi perfil</a></li>
                        <li id="cerrarSesion"><a>Cerrar sesión</a></li>
                    </ul>
                </nav>
                <div id="idProfesor" class="invisible">${idProfesor}</div>
            </div>
    `;
};

export const pintarMenuAlumno = (idAlumno) => {
    return `
            <div id="menu">
                <img src="./assets/img/logos/logo.png" alt="EduGame">    
                <label for="toggle-1" class="toggle-menu">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </label>
                <input type="checkbox" id="toggle-1">
                <nav>
                    <ul>
                        <li id="juegos"><a>Juegos</a></li>
                        <li id="perfil"><a>Mi perfil</a></li>
                        <li id="cerrarSesion"><a>Cerrar sesión</a></li>
                    </ul>
                </nav>
                <div id="idAlumno" class="invisible">${idAlumno}</div>
            </div>
    `;
};

export const pintarMenuAdmi = () => {
    return `
            <div id="menu">
                <img src="./assets/img/logos/logo.png" alt="EduGame">    
                <label for="toggle-1" class="toggle-menu">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </label>
                <input type="checkbox" id="toggle-1">
                <nav>
                    <ul>
                        <li id="profesores"><a>Profesores</a></li>
                        <li id="alumnos"><a>Alumnos</a></li>
                        <li id="asignaturas"><a>Asignaturas</a></li>
                        <li id="cerrarSesion"><a>Cerrar sesión</a></li>
                    </ul>
                </nav>
            </div>
    `;
};

export const pintarFooter = () => {
    return `
        <div class="footer-distributed">
            <div class="footer-left">
                <h3 href="#">Edu<span>Game</span></h3>
                <p class="footer-company-name">Astra Gaming © 2022</p>
               
            </div>
            <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>Dirección: Av. Reina Sofia, 21, 03610 Petrer, Alicante</span> Localidad: Petrer</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <p>Teléfono: 966 95 73 00</p>
                </div>
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                    <p id="hablanos">Si quieres saber algo háblanos a:</p>
                    <a id="email" href="mailto:astragamingentertainment@gmail.com">astragamingentertainment@gmail.com</a>
                </p>

            </div>
        </div>
    `;
};

export const pintarJuegos = () => {
    return `
        <div class="containerJuegos">
            <h2 class="text-center">JUEGOS</h2>
            <div class="lightbox-gallery">
                <div class="containerJuego" id="wordle">
                    <img src="./assets/img/portfolio/1.jpg" data-image-hd="https://picsum.photos/id/343/600/600" alt="Juego: Wordle">
                    <h4>Wordle</h4>
                    <p>Adivina la palabra</p>
                </div>
                <div class="containerJuego" id="akinator">
                    <img src="./assets/img/portfolio/2.jpg" data-image-hd="https://picsum.photos/id/112/600/600" alt="Juego: Akinator">
                    <h4>Akinator</h4>
                    <p>Próximamente</p>
                </div>
            </div>
        </div>
    `;
};

export const pintarAlumnos = () => {
    return `
        <section class="tablaAlumnos" id="alumnosProfesor">
            <div>
                <h2>ALUMNOS</h2>
            </div>
            <div id="alumnoClase">
                <div class="wrap">
                    <span class="decor"></span>
                    <nav>
                        <ul class="primary">
                            <li>
                                <a href=""> Asignatura: <span id="cursoActual"></span> - <span id="asignaturaActual"></span></a>
                                <ul id="asignatura" class="sub">
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>1er Apellido</th>
                    <th>2º Apellido</th>
                </tr>
                </thead>
            </table>
            </div>
            <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody id="alumnosTabla">
                    <tr>
                        <td>AAC</td>
                        <td>AUSTRALIAN COMPANY </td>
                        <td>$1.38</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </section>
    `;
};

export const pintarLineaAsignaturaProfesorAlumnos = (curso, nombre) => {
    return `<li class="asignatura"><a><span>${curso}</span> - <span>${nombre}</span></a></li>`;
};

export const pintarLineaAlumnoTabla = (nombre, apellido1, apellido2) => {
    return `<tr>
                <td>${nombre}</td>
                <td>${apellido1}</td>
                <td>${apellido2}</td>
            </tr>`;
};

export const pintarPerfilProfesor = () => {
    return `
            <div id="perfilProfesor">
                <div class="form">
                    <input type="text" value="" id="idProf" hidden>
                    <p>Nombre: <input type="text" value="Pepito" id="nombre" disabled></p>
                    <p>Primer apellido: <input type="text" value="Reig" id="apellido1" disabled></input></p>
                    <p>Segundo apellido: <input type="text" value="Alejo" id="apellido2" disabled></input></p>
                    <p>Email: <input type="text" value="pepitoreig.alu@iespacomolla.es" id="email" disabled></input></p>
                </div>
                    
                <section class="tablaCursosProfesor">
                    <h2>Asignaturas</h2>
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>Curso</th>
                                    <th>Asignatura</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0" id="tablaAsignaturas">
                            <tbody id="asignatura">
                                <tr>
                                    <td>AAC</td>
                                    <td>AUSTRALIAN COMPANY </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
    `;
};
export const pintarLineaAsignaturaProfesor = (curso, asignatura) => {
    return `<tr><td>${curso}</td><td>${asignatura}</td></tr>`;
};

export const pintarPerfilAlumno = () => {
    return `
            <div id="perfilProfesor">
                <div class="form">
                    <input type="text" value="" id="idProf" hidden>
                    <p>Nombre: <input type="text" value="Pepito" id="nombre" disabled></p>
                    <p>Primer apellido: <input type="text" value="Reig" id="apellido1" disabled></input></p>
                    <p>Segundo apellido: <input type="text" value="Alejo" id="apellido2" disabled></input></p>
                    <p>Email: <input type="text" value="pepitoreig.alu@iespacomolla.es" id="email" disabled></input></p>
                </div>
                    
                <section class="tablaCursosProfesor">
                    <h2>Asignaturas</h2>
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>Curso</th>
                                    <th>Asignatura</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0" id="tablaAsignaturas">
                            <tbody id="asignatura">
                                <tr>
                                    <td>AAC</td>
                                    <td>AUSTRALIAN COMPANY </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
    `;
};
export const pintarLineaAsignaturaAlumno = (curso, asignatura) => {
    return `<tr><td>${curso}</td><td>${asignatura}</td></tr>`;
};

export const pintarConfirmarCerrarSesion = () => {
    return `
            <div id="cSes">
                <h1>¿Seguro que quieres cerrar sesión?</h1>
                
                <a id="confirmarCerrarSesion" class="button">Confirmar</a>
            </div>
    `;
};


/** ADMI */
export const pintarConfirmarEliminar = (nombre) => {
    return `
            <div id="cSes">
                <h1>¿Seguro que quieres eliminar a ${nombre}?</h1>
                
                <a id="confirmarEliminar" class="button">Confirmar</a>
            </div>
    `;
};

export const pintarAlumnosAdmi = () => {
    return `
        <section class="tablaAlumnos">
            <div>
                <h2>ALUMNOS</h2>
            </div>
            <div>
                <input type="button" value="Añadir alumno" id="anadir">
            </div>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>1er Apellido</th>
                        <th>2º Apellido</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0" id="alumnado">
                    <tbody>
                    </tbody>
                </table>
            </div>
        </section>
    `;
};

export const pintarProfesoresAdmi = () => {
    return `
        <section class="tablaAlumnos">
            <div>
                <h2>Profesores</h2>
            </div>
            <div>
                <input type="button" value="Añadir profesor" id="anadir">
            </div>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>1er Apellido</th>
                        <th>2º Apellido</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0" id="profesorado">
                    <tbody>
                    </tbody>
                </table>
            </div>
        </section>
    `;
};

export const pintarFormuAnadirUsuario = (tipo) => {
    return `
            <form id="formuAnadir">
                <div class="con">
                    <header class="head-form">
                        <h2>Añadir ${tipo}</h2>
                    </header>
                    <br>
                    <div class="field-set">
                        <input class="form-input" id="nombreUsu" type="text" placeholder="Nombre" required>
                        <br>
                        <input class="form-input" type="text" placeholder="Primer apellido..." id="apellido1" name="apellido1" required>
                        <br>
                        <input class="form-input" type="text" placeholder="Segundo apellido..." id="apellido2" name="apellido2" required>
                        <br>
                        <input class="form-input" type="text" placeholder="Email..." id="email" name="email" required>
                        <br>
                    </div>
                    <div class="other">
                        <button class="btn submits frgt-pass">¿Está todo correcto?   </button>
                        <button id='anadirUsuarioNuevo' class="btn submits sign-up">Añadir usuario
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </form>
    `;
};

export const pintarFormuEditarUsuario = (tipo, nombre, ape1, ape2) => {
    return `
            <form id="formuAnadir">
                <div class="con">
                    <header class="head-form">
                        <h2>Editar ${tipo}</h2>
                    </header>
                    <br>
                    <div class="field-set">
                        <input class="form-input" id="nombreUsu" type="text" value="${nombre}" required>
                        <br>
                        <input class="form-input" type="text" value="${ape1}" id="apellido1" name="apellido1" required>
                        <br>
                        <input class="form-input" type="text" value="${ape2}" id="apellido2" name="apellido2" required>
                        <br><br>
                    </div>
                    <div class="other">
                        <button class="btn submits frgt-pass">¿Está todo correcto?   </button>
                        <button class="btn submits sign-up" id="editarUsu">Editar usuario
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </form>
    `;
};
/** FIN ADMI */


// Mensaje de mantenimiento
export const mantenimiento = () => {
    return `
            <div class="mantenimiento">
                <h1>En construcción</h1>
                <p>Lo sentimos, no hemos encontrado un mensaje más original para decirte que estamos trabajando en ello.</p>
                <h2>Disponible en:</h2>
                <p class="casio" id="reloj">2023 o en adelante.</p>
            </div>
    `;
};

// Página principal desde dónde acceder.
export const pintarMenuPrincipal = () => {
    return `
            <div id="menu">
                <img src="./assets/img/logos/logo.png" alt="EduGame">    
                <label for="toggle-1" class="toggle-menu">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </label>
                <input type="checkbox" id="toggle-1">
                <nav>
                    <ul>
                        <li><a href="#inicio" id="menuInicio">Inicio</a></li>
                        <li><a href="#juegos" id="menuJuegos">Juegos</a></li>
                        <li><a href="#equipo" id="menuEquipo">Equipo</a></li>
                        <li><a href="#footer" id="menuInformacion">+ Información</a></li>
                        <li id="acceder"><a>Acceder</a></li>
                    </ul>
                </nav>
            </div>
    `;
};

export const pintarPaginaPrincipal = () => {
    return `
            <div id="inicio">
                <h1>Bienvenido a <span class="name1">Edu</span><span class="name2">Game</span></h1>
                <h4>Diviertete y aprende con esta herramienta educativa</h4>
            </div>
            <div id="juegos">
                <div class="containerJuegos">
                    <h2 class="text-center">JUEGOS</h2>
                    <div class="lightbox-gallery">
                        <div class="containerJuego" id="wordle">
                            <img src="./assets/img/portfolio/1.jpg" data-image-hd="https://picsum.photos/id/343/600/600"
                                alt="Juego: Wordle">
                            <h4>Wordle</h4>
                            <p>Adivina la palabra</p>
                        </div>
                        <div class="containerJuego" id="akinator">
                            <img src="./assets/img/portfolio/2.jpg" data-image-hd="https://picsum.photos/id/112/600/600"
                                alt="Juego: Akinator">
                            <h4>Akinator</h4>
                            <p>Próximamente</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contenedorEquipo">
                <h2 class="titEquipo">Nuestro equipo</h2>
                <div id="equipo">
                    <div class="team">
                        <img src="./assets/img/team/1.jpg" alt="Pablo Tomás">
                        <h3>Pablo Tomás</h3>
                        <p>Desarrollador Web</p>
                    </div>
                    <div class="team">
                        <img src="./assets/img/team/2.jpg" alt="Virginia Campayo">
                        <h3>Virginia Campayo</h3>
                        <p>Desarrolladora Web</p>
                    </div>
                </div>
            </div>
    `;
};

/** Fin página principal. */

/** Pintar Wordle */
export const pintarWordleAlumno = () => {
    return `<div id="game"></div>
            <div id="infoGame" class="invisible"></div>`;
};

export const pintarWordleProfesor = () => {
    return `<div id="wordleProfesor">
                <form id="formuPalabra">
                    <div class="wrap">
                        <span class="decor"></span>
                        <nav>
                            <ul class="primary">
                                <li>
                                    <a href=""> Asignatura: <span id="cursoActual"></span> - <span id="asignaturaActual"></span></a>
                                    <ul id="listaAsignaturasWordleProfesor" class="sub">
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <p></p><label>Palabra: <input id="palabra" type="text" name="palabra"></label></p>
                    <div id="botonesPalabra">
                        <input type="button" id="botonAnadirPalabra" class="fill" value ="Añadir palabra"></input>
                        <input type="button" id="botonEliminarPalabra" class="fill" value="Eliminar palabra"></input>
                        <input type="button" id="recargarPalabras" class="fill" value="Recargar palabras"></input>
                    </div>
                </form>

                <section id="diccionarioWordle">
                    <div>
                        <h2>Diccionario Wordle</h2>
                        <ul id="diccionarioWordleProfesor">
                        </ul>
                    </div>
                </section>
            </div>`;
};
export const pintarLineaListaAsignaturaProfesorWordle = (curso, asignatura) => {
    return `<li class="asignatura"><a><span>${curso}</span> - <span>${asignatura}</span></a></li>`;
};

export const pintarLineaDiccionarioAsignatura = (palabra) => {
    return `<li>-   ${palabra}  -</li>`;
};

export const pintarAdminAsignaturas = () => {
    return `
            <div id="adminAsignaturas">
                <form id="formuPalabra">
                    <section class="tablaAlumnos">
                        <div class="tbl-header">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <thead>
                                    <tr>
                                        <th>Curso</th>
                                        <th>Profesor</th>
                                        <th>Asignatura</th>
                                        <th></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="tbl-content">
                            <table cellpadding="0" cellspacing="0" border="0" id="profesorado">
                                <tbody>
                                    <tr>
                                        <td>1ºDAW</td>
                                        <td>Silvia Amorós</td>
                                        <td>Base de Datos</td>
                                        <td><input type='button' value='Eliminar' name='eliminar'></td>
                                    </tr>
                                    <tr>
                                        <td>2ºDAW</td>
                                        <td>Silvia Amorós</td>
                                        <td>Despliegue de Aplicaciones Web</td>
                                        <td><input type='button' value='Eliminar' name='eliminar'></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <div id="botonAnadirAsignatura">
                        <button class="fill">Añadir asignatura</button>
                    </div>
                </form>
            </div>`
};

export const pintarAsignaturasWordleAlumno = () => {
    return `
            <div id="alumnoClase">
                <div class="wrap">
                    <span class="decor"></span>
                    <nav>
                        <ul class="primary">
                            <li>
                                <a href=""> Asignatura: <span id="cursoActual"></span> - <span id="asignaturaActual"></span></a>
                                <ul id="asignatura" class="sub">
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="game"></div>
            <div id="infoGame"></div>
    `;
};

export const pintarLineaAsignaturaWordleAlumno = (curso, nombre) => {
    return `<li class="asignatura"><a><span>${curso}</span> - <span>${nombre}</span></a></li>`;
};