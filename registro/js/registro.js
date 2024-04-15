//variables
const URL = "http://localhost:3000/users";
//selectors
const formRegister = document.querySelector("#formRegister");
const nameInput = document.querySelector("#nameRegister");
const emailInput = document.querySelector("#emailRegister");
const passwordInput = document.querySelector("#passwordRegister");
const confirmPasswordInput = document.querySelector("#confirmPasswordRegister");

//events
formRegister.addEventListener("submit",e => {
  
  e.preventDefault();
  createUser();
});

async function createUser() {
  if (await validateEmail()) {
    showError("Email already exist in the database");
    return;
  }
  if (!validatePassword()) {
    showError("Invalid password");
    return;
  }

  try {
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });
    showSuccess("User Registered Successful");
    window.location.href = "/index.html"
  } catch (error) {
    showError(error);
  }

}

function validatePassword() {
  /**
  Minimo 8 caracteres,
  Maximo 15,
  Al menos una letra mayúscula,
  Al menos una letra minucula,
  Al menos un dígito,
  No espacios en blanco,
  Al menos 1 caracter especial.
  */
  const regexp_password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    
  return (
    passwordInput.value === confirmPasswordInput.value &&
    regexp_password.test(passwordInput.value)
  );
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

async function validateEmail() {
  try {
    const response = await fetch(`${URL}?email=${emailInput.value}`);
    const data = await response.json();
    return data.length;
  } catch (error) {
    showError(error);
  }
}
