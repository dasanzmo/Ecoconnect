const login = document.querySelector("#modalogin");
const container = document.querySelector("section.main-container");
const header = document.createElement("header");
const footer = document.createElement("footer");


document.addEventListener("DOMContentLoaded", () => {

    llamarHeaderFooter(); // Funcion para llamar header y footer
    llamarLogin(); // Función para llamar el login
    scrollTop(); // Botón de scroll
    quitarPreload(); // Quitar el preload
    doLogin(); // Validar login
    guardian(); // Validar rutas
    doNewsletter(); // Guardar newsletter
    parallax(); // Llamar parallax
    mainChangeLanguage(); // Función para traducir

    /*=====================================
        Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            logo.src = '/global/images/logo/logo.svg';
        } else {
            header_navbar.classList.remove("sticky");
            logo.src = '/global/images/logo/white-logo.svg';
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }

        //===== mobile-menu-btn
        let navbarToggler = document.querySelector(".mobile-menu-btn");
        navbarToggler.addEventListener('click', function () {
            navbarToggler.classList.toggle("active");
        });

    };

});

export function llamarHeaderFooter() {
    // ***************************** HEADER ************************** //
    header.innerHTML = `
    <!-- Start Header Area -->
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-12">
            <div class="nav-inner">
                <!-- Start Navbar -->
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="/index.html">
                        <img src="/global/images/logo/white-logo.svg" alt="Logo">
                    </a>
                    <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="toggler-icon"></span>
                        <span class="toggler-icon"></span>
                        <span class="toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                        <ul id="nav" class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a href="/index.html" class="active" aria-label="Toggle navigation" translate="navInicio">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a href="/ecoalertas/index.html" aria-label="Toggle navigation" translate="navEcoalertas">Ecoalertas</a>
                            </li>
                            <li class="nav-item">
                                <a href="/info/index.html" aria-label="Toggle navigation" translate="navInfoSostenible">Info Sostenible</a>
                            </li>
                            <li class="nav-item">
                                <a href="/impacto/index.html" aria-label="Toggle navigation" translate="navImpactoPersonal">Impacto personal</a>
                            </li>
                            <li class="nav-item">
                                <a href="/store/index.html" aria-label="Toggle navigation" translate="navShop">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a href="/blog/index.html" aria-label="Toggle navigation" translate="navBlog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="/contacto/index.html" aria-label="Toggle navigation" translate="navContacto">Contacto</a>
                            </li>
                        </ul>
                    </div> <!-- navbar collapse -->
                    <div class="button" id="buttons">
                        <div class="dropdown d-none">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Usuario
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/admin/index.html" translate="dropdownAdministrar">Administrar</a></li>
                                <li><a class="dropdown-item" href="#" translate="dropdownCerrarSesion">Cerrar sesión</a></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-login" data-bs-toggle="modal" data-bs-target="#modalogin" id="btn-login"><i class="lni lni-user"></i></button>
                        <div class="button">
                            <a class="btn button" href="https://www.mercadopago.com.co/" id="donar" target="_blank" translate="buttonDonarAhora">Donar ahora</a>
                        </div>
                        <a class="ms-2" href="javascript:void(0);" id="changeLanguage">
                            <img class="flag" src="/global/images/en.png" alt="EN Flag"></img>
                            <span translate="langEN">EN</span>
                        </a>
                    </div>
                </nav>
                <!-- End Navbar -->
            </div>
        </div>
    </div> <!-- row -->
</div> <!-- container -->
<!-- End Header Area -->
    `
    header.classList.add("header");
    header.classList.add("navbar-area")
    document.body.prepend(header);

    // ***************************** FOOTER ************************** //
    footer.innerHTML = `
    <!-- Start Footer Area -->
<!-- Start Footer Top -->
<div class="footer-top">
    <div class="container">
        <div class="inner-content">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Single Widget -->
                    <div class="single-footer f-about">
                        <div class="logo">
                            <a href="index.html">
                                <img src="/global/images/logo/white-logo.svg" alt="#">
                            </a>
                        </div>
                        <p translate="aboutUs">Eco-Connect not only provides you with knowledge but also the opportunity to turn your learnings into meaningful actions. From community projects to daily habits, every action counts.</p>
                        <h4 class="social-title" translate="followUs">Follow Us:</h4>
                        <ul class="social">
                            <li><a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="lni lni-instagram"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="lni lni-pinterest"></i></a></li>
                            <li><a href="javascript:void(0)"><i class="lni lni-youtube"></i></a></li>
                        </ul>
                    </div>
                    <!-- End Single Widget -->
                </div>
                <div class="col-lg-2 col-md-6 col-12">
                    <!-- Single Widget -->
                    <div class="single-footer f-link">
                        <h3 translate="menu">Menu</h3>
                        <ul>
                            <li><a href="javascript:void(0)" translate="ecoAlerts">Eco Alerts</a></li>
                            <li><a href="javascript:void(0)" translate="sustainableInfo">Sustainable Info</a></li>
                            <li><a href="javascript:void(0)" translate="personalImpact">Personal Impact</a></li>
                        </ul>
                    </div>
                    <!-- End Single Widget -->
                </div>
                <div class="col-lg-2 col-md-6 col-12">
                    <!-- Single Widget -->
                    <div class="single-footer f-link">
                        <h3>__________</h3>
                        <ul>
                            <li><a href="javascript:void(0)" translate="shop">Shop</a></li>
                            <li><a href="javascript:void(0)" translate="blog">Blog</a></li>
                            <li><a href="javascript:void(0)" translate="contact">Contact</a></li>
                        </ul>
                    </div>
                    <!-- End Single Widget -->
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Single Widget -->
                    <div class="single-footer newsletter">
                        <h3 translate="newsletter">Newsletter</h3>
                        <p translate="subscribeText">Subscribe to our newsletter and stay updated on everything happening at Eco-Connect</p>
                        <form id="newsletter" method="get" target="_blank" class="newsletter-form">
                            <input name="email" id="emailnews" placeholder="daniel@example.com" required="required" type="email">
                            <div class="button">
                                <button type="submit" id="btn-newsletter" class="sub-btn"><i class="lni lni-envelope"></i></button>
                            </div>
                        </form>
                    </div>
                    <!-- End Single Widget -->
                </div>
            </div>
        </div>
    </div>
</div>
<!--/ End Footer Top -->
<!-- Start Copyright Area -->
<div class="copyright-area">
    <div class="container">
        <div class="inner-content">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <p class="copyright-text" translate="copyright">© 2024 Eco-connect - All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Copyright Area -->
<!--/ End Footer Area -->
    `

    footer.classList.add("footer");
    footer.classList.add("section");
    container.after(footer);
}

//===== Prealoder
export function quitarPreload() {
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }
}

export function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}

export function scrollTop() {

    footer.innerHTML += `
    <!-- ========================= scroll-top ========================= -->
    <a href="#" class="scroll-top">
        <i class="lni lni-chevron-up"></i>
    </a>`

}

export function llamarLogin() {

    footer.innerHTML += `
    <div class="modal" tabindex="-1" role="dialog" id="modalogin">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <!-- Start Account Sign In Area -->
                <div class="account-login section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-12">
                                <form class="card login-form inner-content">
                                    <div class="card-body">
                                        <div class="title">
                                            <h3 translate="signIn">Sign In</h3>
                                            <p translate="signInInfo">Sign in by entering the information below.</p>
                                        </div>
                                        <div class="input-head">
                                            <div class="form-group input-group">
                                                <label><i class="lni lni-envelope"></i></label>
                                                <input class="form-control" type="email" id="reg-email"
                                                    placeholder="Email" required="">
                                            </div>
                                            <div class="form-group input-group">
                                                <label><i class="lni lni-lock-alt"></i></label>
                                                <input class="form-control" type="password" id="reg-pass"
                                                    placeholder="Password" required="">
                                            </div>
                                        </div>
                                        <div class="d-flex flex-wrap justify-content-between bottom-content">
                                        </div>
                                        <div class="button">
                                            <button class="btn" id="buttonSubmit" type="submit" translate="signInButton">Sign In</button>
                                        </div>
                                        <h4 class="create-account" translate="noAccount">Don't have an account? 
                                        </h4>
                                        <a href="/registro/index.html" id="register" translate="signUpLink">Sign Up Now</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Account Sign In Area -->
            </div>
        </div>
    </div>
 </div> 
`
}



// ***************************** LOGIN CODE START ************************** //
function doLogin() {
    const login = document.querySelector("#modalogin");
    const emailInputLogin = document.querySelector("#reg-email");
    const passInputLogin = document.querySelector("#reg-pass");
    const buttonLogin = document.querySelector("#btn-login");
    const loginForm = document.querySelector(".login-form");

    buttonLogin.addEventListener("click", () => {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            verifyLogin(loginForm, emailInputLogin, passInputLogin);
        });
    });
}

async function verifyLogin(loginForm, email, password) {
    if (loginForm.checkValidity()) {
        console.log("validado");

        try {
            const URLdb = "/db/database.json";
            const response = await fetch(`${URLdb}?email=${email.value}`);
            const data = await response.json();
            if (data.length) {
                if (password.value === data[0].password) {
                    showSuccess("¡Bienvenido!.");
                    const userValidation = [data[0].name, "true"];
                    localStorage.setItem("isAuthenticated", userValidation)
                    window.location.href = "/index.html";
                    //return; //este return lo puedo quitar cuando se redireccione
                }
                else{
                    showError("Usuario o contraseña incorrectos.");
                }
            }
            else{
                console.log(response);
                console.log(data);
                showError("El usuario no existe");
            }
        } catch (error) {
            showError(error);
        }
    } else {
        console.log("no validado");
    }
}

/**Function to logOut */
export function logOut() {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/index.html";
}

function showError(msg) {
    Swal.fire({
        title: "Error!",
        text: msg,
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        toast: "true",
    });
}

function showSuccess(msg) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: msg,
        showConfirmButton: false,
        toast: "true",
        timer: 3000,
    });
}

// ***************************** LOGIN CODE END ************************** //

function doNewsletter() {
    const emailnewsletter = document.querySelector("#emailnews");
    const buttonNewsletter = document.querySelector("#btn-newsletter");
    const newsletterForm = document.querySelector("#newsletter");

    buttonNewsletter.addEventListener("click", () => {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            saveNewsletter(emailnewsletter);
        });
    });

}

async function saveNewsletter(email) {
    const URL = "http://localhost:3000/boletin";
    try {
        await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email.value
            }),
        });
        showSuccess("¡Gracias por suscribirte!, pronto recibirás más noticias sobre nosotros");
        window.location.href = "/index.html"
    } catch (error) {
        showError(error);
    }

}


// ***************************** GUARDIAN CODE START ************************** //
export function guardian() {
    (() => {
        //Logica
        //Obtenemos la sesión del usuario del localStorage
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        //Obteno la ruta donde el usuario quiere acceder
        const path = window.location.pathname;

        //Corto el path para acceder solamente al archivo que esta intentando acceder el usuario
        const routeActu = path.split("/").slice(path.split("/").length -2).join("/");

        //Creo una lista con todos los nombre de los archivos que yo quiero proteger
        const privateRoutes = ["admin/index.html"];

        //Si la ruta acutal se encuentra dentro de las privadas Y el usuario no está autenticado entonces lo redirigimos al login

        if (privateRoutes.includes(routeActu) && !isAuthenticated) {
            showError("No tienes permisos para acceder a esta página");
            window.location.href = "/index.html"
        }

        if (isAuthenticated) {
            const isAuthenticatedListed = isAuthenticated.split(",");
            const dropdown = document.querySelector("#buttons .dropdown");
            const buttonLogin = document.querySelector("#buttons #btn-login");
            const buttonDonate = document.querySelector("#donar");
            const dropdownItems = document.querySelectorAll(".dropdown-item");


            dropdown.querySelector("button").textContent = isAuthenticatedListed[0];
            dropdown.classList.remove("d-none");
            buttonLogin.classList.add("d-none");
            buttonDonate.classList.add("d-none");
            dropdownItems[1].addEventListener("click", () => {
                logOut();
            })
        }
    }
    )()
}

// ***************************** GUARDIAN CODE END ************************** //

// ***************************** PARALLAX ************************** //
export function parallax(){
    var parallax = document.querySelector('.parallax-container');
    var backgrounds = document.querySelectorAll('.parallax-background');
  
    window.addEventListener('scroll', function() {
      backgrounds.forEach(function(background, index) {
        var speed = parseFloat(background.getAttribute('data-speed'));
        var yPos = -window.scrollY * speed;
        background.style.transform = 'translateY(' + yPos + 'px)';
      });
    });
}

// ***************************** END PARALLAX ************************** //


// ***************************** TRANSLATE CODE ************************** //

function mainChangeLanguage() {
    
    const changeLanguageButton = document.querySelector("#changeLanguage");
    const changeLanguageText = document.querySelector("#changeLanguage span");
    const imgFlag = document.querySelector(".flag")
    let sw = true;

    changeLanguageButton.addEventListener("click",()=>{
       
        if(sw){
            imgFlag.src = "/global/images/es.png";
            changeLanguageText.textContent = "ES";
            sw = false;
        }
        else{
            imgFlag.src = "/global/images/en.png";
            changeLanguageText.textContent = "EN";
            sw = true;
        }

        changeLanguage();

    })
}

// Función para cargar traducciones desde archivos JSON
    function loadTranslations(language) {
      return fetch(`/locales/${language}.json`)
        .then(response => response.json())
        .then(translations => {
          const elements = document.querySelectorAll('[translate]');
          elements.forEach(element => {
            const key = element.getAttribute('translate');
            element.textContent = translations[key];
          });
        })
        .catch(error => console.error('Error loading translations:', error));
    }

    // Función para cambiar el idioma
    function changeLanguage() {
      const newLanguage = document.documentElement.lang === 'en' ? 'es' : 'en';
      document.documentElement.lang = newLanguage;
      loadTranslations(newLanguage);
    }

    // Cargar las traducciones al cargar la página
    window.addEventListener('DOMContentLoaded', () => {
      const userLanguage = "es"; // Obtener el idioma del usuario
      document.documentElement.lang = userLanguage;
      loadTranslations(userLanguage);
    });

// ***************************** TRANSLATE CODE END ************************** //

// WOW active
new WOW().init();
