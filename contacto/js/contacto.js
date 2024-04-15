import { llamarHeaderFooter, scrollTop, llamarLogin, quitarPreload, fadeout } from "../../global/js/global.js";

const URL = "http://localhost:3000/contacts";

document.addEventListener('DOMContentLoaded', function () {

    quitarPreload();
    
    const form = document.getElementById("contactForm");

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario

        const nameInput = document.getElementById("nombre").value;
        const phoneInput = document.getElementById("tel").value;
        const mensajeInput = document.getElementById("mensaje").value;
        const emailInput = document.getElementById("email").value;

        addContact(nameInput, phoneInput, mensajeInput, emailInput);

        enviarContacto(nameInput, emailInput, mensajeInput, phoneInput);
    
        // Puedes restablecer los valores del formulario si es necesario
        this.reset();
        this.classList.add("d-none")
        this.classList.remove("d-block")

        mostrarResultado();
    
    });
});


async function addContact(nombre, telefono, mensaje, email) {    

    try {
        //Crear el envío
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                telefono: telefono,
                email: email,
                mensaje: mensaje,
            })
        })
    } catch (error) {
        alert("Ocurrió un error al crear el envío.")
    }

}


function mostrarResultado() {
    // Busca el div de resultado existente o crea uno nuevo
    const resultadoDiv = document.getElementById('resultadoDiv');

    resultadoDiv.classList.add("d-block")
    resultadoDiv.classList.remove("d-none")

    // Actualiza el contenido del div con el resultado
    resultadoDiv.innerHTML += '<h3>Tu mensaje has sido enviado</h3><p>Pronto nos comunicaremos contigo</p>';
}

function enviarContacto(nombre, email, mensaje, telefono) {
    emailjs.init('nPT0izp62SpsMjyVV'); // Reemplaza 'tu_user_id' con tu ID de usuario de Email.js

    const templateParams = {
        to_email: "danielsanchezm92@gmail.com",
        to_name: "Daniel",
        from_name: "Eco-connect",
        message: mensaje
    };

    // Reemplaza 'tu_template_id' con tu ID de plantilla de Email.js
    emailjs.send('service_r9bhcjq', 'template_91xnvy8', templateParams)
        .then(function (response) {
            console.log('Correo enviado con éxito:', response);
        })
        .catch(function (error) {
            console.error('Error al enviar el correo:', error);
        });
}

