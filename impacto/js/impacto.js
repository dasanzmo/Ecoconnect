import { llamarHeaderFooter, scrollTop, llamarLogin, quitarPreload, fadeout } from "../../global/js/global.js"

document.addEventListener('DOMContentLoaded', function () {

    quitarPreload();


    const carbonForm = document.getElementById('carbonForm');

    carbonForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del formulario

      // Obtiene los valores de los campos del formulario
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const transporte = document.getElementById('transport').value;
      const vivienda = document.querySelector('input[name="housing"]:checked').value;
      const reciclaje = document.getElementById('recycle').checked;
      const electricidad = parseFloat(document.getElementById('electricity').value);
      const agua = parseFloat(document.getElementById('water').value);

      // Calcula la huella de carbono
      let  huellaCarbono = calcularHuellaCarbono(transporte, vivienda, reciclaje, electricidad, agua);

      // Enviar correo electrónico
      enviarCorreo(email, nombre, huellaCarbono); 
      
      // Muestra el resultado en un div adicional
      mostrarResultado(huellaCarbono);

      // Puedes enviar los datos a un servidor aquí o realizar otras acciones necesarias
      // ...

      // Puedes restablecer los valores del formulario si es necesario
      this.reset();
      this.classList.add("d-none")
      this.classList.remove("d-block")


    });
  });

  function calcularHuellaCarbono(transporte, vivienda, reciclaje, electricidad, agua) {
    // Factores de emisión recomendados (en kg CO2e por unidad)
    var factores = {
      transporte: { car: 0.2, bus: 0.1, bike: 0.02, moto: 0.2 },
      vivienda: { apartment: 0.5, house: 1.0 },
      reciclaje: reciclaje ? 0.8 : 1.0,
      electricidad: 0.45, // Factor promedio global según la Agencia Internacional de Energía
      agua: 0.065 // Factor promedio global según la Huella de Agua
    };

    // Calcula la huella de carbono
    const huellaTransporte = electricidad * factores.transporte[transporte];
    const huellaVivienda = agua * factores.vivienda[vivienda] * factores.reciclaje;

    // Suma de todos los factores
    const huellaTotal = huellaTransporte + huellaVivienda;

    return huellaTotal;
  }

  function mostrarResultado(huellaCarbono) {
    // Busca el div de resultado existente o crea uno nuevo
    const resultadoDiv = document.getElementById('resultadoDiv');

    resultadoDiv.classList.add("d-block")
    resultadoDiv.classList.remove("d-none")

    // Actualiza el contenido del div con el resultado
    resultadoDiv.innerHTML += '<p>¡Huella de carbono calculada!</p><p>Resultado: ' + huellaCarbono.toFixed(2) + ' kg CO2e</p>';
  }

  function enviarCorreo(email, nombre, huellaCarbono) {
    emailjs.init('nPT0izp62SpsMjyVV'); // Reemplaza 'tu_user_id' con tu ID de usuario de Email.js
  
    const templateParams = {
      to_email: email,
      to_name: nombre,
      from_name: "Eco-connect",
      message: `${huellaCarbono.toFixed(2)}  kg CO2e`
    };
  
   // Reemplaza 'tu_template_id' con tu ID de plantilla de Email.js
    emailjs.send('service_r9bhcjq', 'template_d2ikhxi', templateParams)
    .then(function (response) {
      console.log('Correo enviado con éxito:', response);
    })
    .catch(function (error) {
      console.error('Error al enviar el correo:', error);
    });
  }