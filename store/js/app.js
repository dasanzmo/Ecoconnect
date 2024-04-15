//Selectores
const contenedorProd = document.querySelector(".productos");
const container = document.querySelector("container");
const card = document.querySelector(".card");
const buttonVaciar = document.querySelector(".vaciar");
const maximo = document.querySelector("#maximo");
const tbody = document.getElementById("tbody");
const pTotal = document.querySelector("#pTotal");
const btnCart = document.querySelector("#btn-cart")

//Variables
let listaCarrito = [];
let sumaTotal = 0

const URL = "http://localhost:3000/productos";

//Obtener los productos
async function ObtenerProductos() {
  const response = await fetch(URL);
  const data = await response.json();
  filtrar(data);
}

//Eventos
buttonVaciar.addEventListener("click", () => {
  cleanHTML(tbody);
  listaCarrito = [];
  pTotal.classList.replace("d-flex", "d-none")
  sumaTotal = 0
});

maximo.addEventListener("input", () => {
  ObtenerProductos();
});

document.addEventListener("DOMContentLoaded", () => {
  ObtenerProductos();
});

//Funcion mostrar productos con datos json
function mostrarProductos(data) {
  cleanHTML(contenedorProd);
  data.forEach((producto) => {

    /*Dar formato al precio */
    const precioFormat = Number(producto.precio).toLocaleString("es-CO", {
      style: "currency",
      currency: "COP"
    });

    contenedorProd.innerHTML += `
      <div class="col-md-4 p-2">
        <div class="card">
          <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}" />
          <div class="body">
            <h2 class="title-card">${producto.nombre}</h2>
            <p><span>${precioFormat}</span></p>
            <div class="button">
              <button type="button" data-id=${producto.id} class="btn button agregar">Agregar al Carrito </button></div>
          </div>  
        </div>
      </div>

        `;
  });
  const agregar = document.querySelectorAll(".agregar");
  const sw = true;
  agregar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      agregarCarrito(e.target.getAttribute("data-id"));
      if(document.querySelector("#collapseWidthExample").classList.contains("show")){
        sw = false;
      }
      else{
        btnCart.click();
        sw= true;
      }
      
    });
  });
}
//Agregar al carrito
async function agregarCarrito(id) {

  const response = await fetch(`${URL}?id=${id}`);
  const data = await response.json();
  let flag = true;
  
  //Agregar mas cantidades de un producto
  listaCarrito.forEach((producto) => {
    if (Number(id) === Number(producto.id)) {
      producto.cantidad++;
      flag = false;
      sumaTotal += Number(producto.precio)
    }
  });

  // Si no existe el producto, lo agrega
  if (flag) {
    data.forEach((element) => {
      element.cantidad = 1;
      listaCarrito.push(element);
      sumaTotal += Number(element.precio)
    });
  }
  pintarCarrito();
}

//Mostrar los productos en el carrito
function pintarCarrito() {

  cleanHTML(tbody);
  listaCarrito.forEach((producto) => {

    /*Dar formato al precio */
    const precioFormat = Number(producto.precio).toLocaleString("es-CO", {
      style: "currency",
      currency: "COP"
    });

    tbody.innerHTML += `
    <tr>
      <td><img src="${producto.imagen}" height="60px" alt=""></td>
      <td>${producto.nombre}</td>
      <td>${precioFormat}</td>
      <td>
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-primary eliminar btn-sm" data-id ="${producto.id}"><i class='bx bx-minus fs-6'></i></button>
            ${producto.cantidad}<button type="button" class="btn btn-primary sumar btn-sm" data-id ="${producto.id}"><i class='bx bx-plus fs-6'></i>
          </button>
        </div>
      </td>
    </tr>`;

    // Eliminar cantidades
    const eliminar = document.querySelectorAll(".eliminar");

    eliminar.forEach((botonmenos) => {
      botonmenos.addEventListener("click", () => {
        restaruno(botonmenos);
        pintarCarrito();
      });
    });

    //Sumar cantidades
    const sumar = document.querySelectorAll(".sumar");

    sumar.forEach((botonmas) => {
      botonmas.addEventListener("click", () => {
        sumaruno(botonmas);
        pintarCarrito();
      });
    });
  });

  /*Dar formato al total */
  const precioTotalFormat = Number(sumaTotal).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP"
  });

  const sTotal = document.querySelector("#spanPrecio");

  pTotal.classList.replace("d-none", "d-flex");
  sTotal.textContent = precioTotalFormat;
}

//limpiar HTML
function cleanHTML(contenedor) {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}

//filtrar productos
function filtrar(datos) {
  if (maximo.value) {
    const filtrados = datos.filter((element) => element.precio <= maximo.value);
    mostrarProductos(filtrados);
  } else mostrarProductos(datos);
}

//Funcion restar cantidad
function restaruno(eliminar) {
  const idMenos = eliminar.getAttribute("data-id");
  listaCarrito.forEach((element) => {
    if (idMenos == element.id) {
      element.cantidad--;
      sumaTotal -= Number(element.precio)
    }
    if (element.cantidad < 1) {
      listaCarrito = listaCarrito.filter((prod) => Number(prod.id) !== Number(idMenos));
    }
  });
}
//Funcion sumar cantidad
function sumaruno(sumar) {
  const idSumar = sumar.getAttribute("data-id");
  listaCarrito.forEach((element) => {
    if (idSumar == element.id) {
      element.cantidad++;
      sumaTotal += Number(element.precio)
    }
  });
}
