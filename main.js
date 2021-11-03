//Ingreso
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

//FIGURAS POR DOM
const peluches = [
  { id: 1, nombre: "Goku Blue", altura: "55cm", precio: 9000 },
  { id: 2, nombre: "Kurama con el Susanoo", altura: "50cm", precio: 8500 },
  { id: 3, nombre: "Itadori", altura: "55cm", precio: 7000 },
  { id: 4, nombre: "Luffy en 4ta marcha", altura: "50cm", precio: 8000 },
];
for (const peluche of peluches) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<div class = "container">
  <p> ID : ${peluche.id}</p>
  <p>Producto: ${peluche.nombre}</p>
  <p>Altura: ${peluche.altura}</p>
  <p>$ ${peluche.precio}</p> 
  <br>
  </div>`;

  document.body.appendChild(contenedor);
}
let salida = false;

alert(nombreIngresado + " gracias por tu visita!");

//Creador de Esferas
let createBoxBtn = document.getElementById("createBoxBtn");
let boxCtn = document.getElementById("boxCtn");
createBoxBtn.addEventListener("click", createBox);

function createBox() {
  let box = document.createElement("div");
  box.classList.add("esfera");
  boxCtn.appendChild(box);
}
