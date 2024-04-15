//variables
const URLEcoAlertas = "http://localhost:3000/ecoalertas";
//selectors
const formEcoalerta = document.querySelector("#form-Ecoalerta");
const nameEco = document.querySelector("#nameEcoalerta");
const emailEco = document.querySelector("#emailEcoalerta");
const addressEco = document.querySelector("#direccionEcoalerta");
const phoneEco = document.querySelector("#celularEcoalerta");
const messageEco = document.querySelector("#messageEcoalerta");
const photoEco = document.querySelector("#fotoEcoalerta");
const ciudadEco = document.querySelector("#ciudadEcoalerta");

formEcoalerta.addEventListener("submit",(e)=>{
    e.preventDefault();
    createEcoalerta();
})

async function createEcoalerta() {
    if (checkPhone()) {
        try {
          await fetch(URLEcoAlertas, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: nameEco.value,
                email: emailEco.value,
                address: addressEco.value,
                phone: phoneEco.value,
                photo: photoEco.value,
                city: ciudadEco.value,
                message: messageEco.value
              }),
            });
          } catch (error) {
            showError(error);
          }
        
        }else{
            showError("Número no valido");
        }
        
    }
  
function checkPhone() {
    return phoneEco.value.length===10;
    
}

function showError(msg) {
    Swal.fire({
      title: "Error!",
      text: msg,
      icon: "error",
      showConfirmButton: false,
      timer: 2000,
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
      timer: 2000,
    });
  }