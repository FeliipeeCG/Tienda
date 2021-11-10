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
