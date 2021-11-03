//Sugerencia por Evento
let sugerencias = document.getElementById("Sugerencias");
Sugerencias.addEventListener("click", () => {
  let texto = prompt("Que merchandising quieres que traigamos a la tienda?");
  if (texto == "Manga pedido") {
    console.log("La gente pide " + texto);
  } else {
    console.log("La gente pide " + texto);
  }
});
let sugerenciasManga = document.getElementById("SugerenciasManga");
sugerenciasManga.addEventListener("click", () => {
  let texto = prompt("Que mangas/comics quieres que traigamos a la tienda?");
  if (texto == "Manga pedido") {
    console.log("La gente quiere " + texto);
  } else {
    console.log("La gente quiere " + texto);
  }
});
