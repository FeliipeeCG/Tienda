localStorage.setItem("Abrimos la tienda", "Entró un cliente");
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

alert(nombreIngresado + " gracias por tu visita!");
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
$(".tituloEsfera").append("<h2>Crea infinitas esferas del Dragon</h2>");
let createBoxBtn = document.getElementById("createBoxBtn");
let boxCtn = document.getElementById("boxCtn");
createBoxBtn.addEventListener("click", createBox);

function createBox() {
  let box = document.createElement("div");
  box.classList.add("esfera");
  boxCtn.appendChild(box);
}

//Perfil del Creador
$("#abrirCreador").click(function (e) {
  $("#creador").css("right", 0);
});
$("#cerrarCreador").click(function (e) {
  $("#creador").css("right", -300);
});
