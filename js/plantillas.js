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
                <!-- frontbox -->
            </div>`;
};

export const pintarMenuProfesor = () => {
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

                <h3>Edu<span>Game</span></h3>

                <p class="footer-links">
                    <a href="#header" class="link-1">Inicio</a>
                    <a href="#">???</a> <!-- Blog-->
                    <a href="#">???</a> <!-- About-->
                    <a href="#">???</a> <!-- Contact-->
                </p>

                <p class="footer-company-name">Astra Gaming © 2022</p>
            </div>

            <div class="footer-center">

                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>Dirección: ??</span> Localidad: ??</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>Teléfono: ???</p>
                </div>

                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:astragamingentertainment@gmail.com">astragamingentertainment@gmail.com</a></p>
                </div>

            </div>

            <div class="footer-right">

                <p class="footer-company-about">
                    <span>Sobre nosotros</span>
                    ?????????
                </p>

                <div class="footer-icons">

                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>

                </div>

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
        <section class="tablaAlumnos">
            <div>
                <h2>ALUMNOS</h2>
            </div>
            <div id="alumnoClase">
                <div class="item">
                    <label for="curso"><p>Curso</p></label>
                    <select name="curso" id="curso">
                        <option value="DAW1">1ºDAW</option>
                        <option value="DAW2">2ºDAW</option>
                    </select>
                </div>

                <div class="item">
                    <label for="asignatura"><p>Asignatura</p></label>
                    <select name="asignatura" id="asignatura">
                        <option value="PROG">Programación</option>
                        <option value="LEMA">Lenguaje de Marcas</option>
                    </select>
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
                <tbody>
                <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                </tr>
                <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                </tr>
                <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                </tr>
                </tbody>
            </table>
            </div>
        </section>
    `;
};

export const pintarPerfilProfesor = () => {
    return `
            <div id="perfilProfesor">
                <form class="form">
                    <p>Nombre: <input type="text" value="Pepito" id="nombre" disabled></p>
                    <p>Primer apellido: <input type="text" value="Reig" id="apellido1" disabled></input></p>
                    <p>Segundo apellido: <input type="text" value="Alejo" id="apellido2" disabled></input></p>
                    <p>Email: <input type="text" value="pepitoreig.alu@iespacomolla.es" id="email" disabled></input></p>
                </form>

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
                            <tbody>
                                <tr>
                                    <td>AAC</td>
                                    <td>AUSTRALIAN COMPANY </td>
                                </tr>
                                <tr>
                                    <td>AAD</td>
                                    <td>AUSENCO</td>
                                </tr>
                                <tr>
                                    <td>AAX</td>
                                    <td>ADELAIDE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
    `;
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
export const pintarConfirmarEliminar = () => {
    return `
            <div id="cSes">
                <h1>¿Seguro que quieres eliminar a ++++?</h1>
                
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
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr>
                        <td>AAC</td>
                        <td>AUSTRALIAN COMPANY </td>
                        <td>$1.38</td>
                        <td><input type="button" value="Editar" name="editar"></td>
                        <td><input type="button" value="Eliminar" name="eliminar"></td>
                    </tr>
                    <tr>
                        <td>AAD</td>
                        <td>AUSENCO</td>
                        <td>$2.38</td>
                        <td><input type="button" value="Editar" name="editar"></td>
                        <td><input type="button" value="Eliminar" name="eliminar"></td>
                    </tr>
                    <tr>
                        <td>AAX</td>
                        <td>ADELAIDE</td>
                        <td>$3.22</td>
                        <td><input type="button" value="Editar" name="editar"></td>
                        <td><input type="button" value="Eliminar" name="eliminar"></td>
                    </tr>
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
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr>
                        <td>AAC</td>
                        <td>AUSTRALIAN COMPANY </td>
                        <td>$1.38</td>
                        <td><input type="button" value="Editar" name="editar"></td>
                        <td><input type="button" value="Eliminar" name="eliminar"></td>
                    </tr>
                    <tr>
                        <td>AAD</td>
                        <td>AUSENCO</td>
                        <td>$2.38</td>
                        <td><input type="button" value="Editar" name="editar"></td>
                        <td><input type="button" value="Eliminar" name="eliminar"></td>
                    </tr>
                    <tr>
                        <td>AAX</td>
                        <td>ADELAIDE</td>
                        <td>$3.22</td>
                        <td><input type="button" value="Editar" name="editar"></td>
                        <td><input type="button" value="Eliminar" name="eliminar"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    `;
};

export const pintarFormuAnadirUsuario = () => {
    return `
            <form id="formuAnadir">
                <div class="con">
                    <header class="head-form">
                        <h2>Anadir profesor/alumno</h2>
                    </header>
                    <br>
                    <div class="field-set">
                        <input class="form-input" id="nombreUsu" type="text" placeholder="Nombre" required>
                        <br>
                        <input class="form-input" type="text" placeholder="Primer apellido..." id="apellido1" name="apellido1" required>
                        <br>
                        <input class="form-input" type="text" placeholder="Segundo apellido..." id="apellido2" name="apellido2" required>
                        <br><br>
                        <label for="maestro">Maestro:</label>
                        <input type="checkbox" name="maestro" value="maestro" >
                        <br>
                    </div>
                    <div class="other">
                        <button class="btn submits frgt-pass">¿Está todo correcto?   </button>
                        <button class="btn submits sign-up">Añadir usuario
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </form>
    `;
};

export const pintarFormuEditarUsuario = () => {
    return `
            <form id="formuAnadir">
                <div class="con">
                    <header class="head-form">
                        <h2>Editar profesor/alumno</h2>
                    </header>
                    <br>
                    <div class="field-set">
                        <input class="form-input" id="nombreUsu" type="text" placeholder="Nombre" required>
                        <br>
                        <input class="form-input" type="text" placeholder="Primer apellido..." id="apellido1" name="apellido1" required>
                        <br>
                        <input class="form-input" type="text" placeholder="Segundo apellido..." id="apellido2" name="apellido2" required>
                        <br><br>
                    </div>
                    <div class="other">
                        <button class="btn submits frgt-pass">¿Está todo correcto?   </button>
                        <button class="btn submits sign-up">Editar usuario
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </form>
    `;
};
/** FIN ADMI */