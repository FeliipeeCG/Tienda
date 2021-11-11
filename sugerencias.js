//Sugerencia por Evento
let sugerencias = document.getElementById("Sugerencias");
Sugerencias.addEventListener("click", () => {
  let texto1 = prompt("Que merchandising quieres que traigamos a la tienda?");
  if (texto1 == "Manga pedido") {
    console.log("La gente pide " + texto1);
  } else {
    console.log("La gente pide " + texto1);
  }
  const enJSON = JSON.stringify(texto1);
  localStorage.setItem("Cosas pedidas", enJSON);
});
let sugerenciasManga = document.getElementById("SugerenciasManga");
sugerenciasManga.addEventListener("click", () => {
  let texto = prompt("Que mangas/comics quieres que traigamos a la tienda?");
  if (texto == "Manga pedido") {
    console.log("La gente quiere " + texto);
  } else {
    console.log("La gente quiere " + texto);
  }
  const enJSON = JSON.stringify(texto);
  localStorage.setItem("Manga pedidos", enJSON);
});
