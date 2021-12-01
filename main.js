localStorage.setItem("Abrimos la tienda", "Entró un cliente");

//Perfil del cliente
$("#presentarme").click(function (e) {
  let nombreIngresado = prompt(
    "¡Bienvenido! ingrese su nombre por favor"
  ).toUpperCase();
  if (nombreIngresado == "JUAN" || nombreIngresado == "FELIPE") {
    alert("Te llamas como yo, somos tocayos");
    console.log("Se llama como yo, se ganó un regalo secreto");
  }
  if (nombreIngresado == "") {
    alert("Ingrese un nombre por favor :3");
  } else {
    alert("Bienvenido " + nombreIngresado);
  }
  console.log("El cliente se llama " + nombreIngresado);
  localStorage.setItem("el cliente se llama", nombreIngresado);
  let valoracion = parseInt(
    prompt("Del 1 al 10, cuanto te gusta el anime/manga en general")
  );
  localStorage.setItem("Al cliente valoró el anime/manga con un ", valoracion);
});

//DOM
let h1 = document.getElementById("h1");
console.log(h1.innerHTML);
let p = document.getElementById("lista");
console.log(p.innerHTML);
let merchandising = document.getElementsByClassName("merchandising");
console.log(merchandising[0].innerHTML);
console.log(merchandising[1].innerHTML);
console.log(merchandising[2].innerHTML);
console.log(merchandising[3].innerHTML);

let salida = false;
//Figuras

class Figura {
  constructor(nombre, imagen, precio, altura) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.altura = altura;
  }
  //Nombre y precio unidos
  getTitle() {
    return this.nombre + " $" + this.precio;
  }
  //Propiedades
  getId() {
    return this.id;
  }
  getNombre() {
    return this.nombre;
  }
  getSrcImage() {
    return this.imagen;
  }
  getAltura() {
    return this.altura;
  }
  getPrecio() {
    return this.precio;
  }
}

//Creador de Esferas
let createBoxBtn = document.getElementById("createBoxBtn");
let boxCtn = document.getElementById("boxCtn");
createBoxBtn.addEventListener("click", createBox);

function createBox() {
  let box = document.createElement("div");
  box.classList.add("esfera");
  boxCtn.appendChild(box);
}
//Comprar y pagar
$("#figuraGoku").click(function (e) {
  let valoracion = parseInt(prompt("Cuantas figuras de goku vas a querer?"));
  let facturaFG = alert(
    "Por las " +
      valoracion +
      " figuras de Goku" +
      "\nVas a pagar $" +
      valoracion * 9000
  );
});
$("#figuraKurama").click(function (e) {
  let valoracion = parseInt(prompt("Cuantas figuras de Kurama vas a querer?"));
  let facturaFK = alert(
    "Por las " +
      valoracion +
      " figuras de Kurama" +
      "\nVas a pagar $" +
      valoracion * 8500
  );
});
$("#figuraItadori").click(function (e) {
  let valoracion = parseInt(prompt("Cuantas figuras de Itadori vas a querer?"));
  let facturaFI = alert(
    "Por las " +
      valoracion +
      " figuras de Itadori" +
      "\nVas a pagar $" +
      valoracion * 7000
  );
});
$("#figuraLuffy").click(function (e) {
  let valoracion = parseInt(prompt("Cuantas figuras de Luffy vas a querer?"));
  let facturaFL = alert(
    "Por las " +
      valoracion +
      " figuras de Luffy" +
      "\nVas a pagar $" +
      valoracion * 8000
  );
});

//Perfil del Creador
$("#abrirCreador").click(function (a) {
  $("#creador").css("right", 0);
});
$("#cerrarCreador").click(function (a) {
  $("#creador").css("right", -300);
});
//json
$(document).ready(() => {
  const url_json = "json_local.json";
  $("#creador").prepend('<button id = "boton">Mas Info</button>');
  $("#boton").click(() => {
    $.getJSON(url_json, function (respuesta, estado) {
      if (estado === "success") {
        for (const dato of respuesta) {
          $("#creador").prepend(`<div>
    <h2>${dato.title}</h2>
    <p>${dato.body}</p>
    </div>`);
        }
      }
    });
  });
});
//carrito
$("#abrirCreadorB").click(function (e) {
  $("#creadorB").css("right", 0);
});
$("#cerrarCreadorB").click(function (e) {
  $("#creadorB").css("right", -300);
});
