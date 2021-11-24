//COMPRA DE ONE PIECE (manga)
let ItemOP = document.getElementById("ItemOP");
ItemOP.addEventListener("click", () => {
  let numero1 = parseInt(
    prompt(
      "Cuantos mangas de One Pieces quieres?" +
        "\n(si no quieres ninguno, contestá en 0)"
    )
  );
  if (numero1 >= 0) {
    tomosDeOP = prompt(
      "Cuales son los tomos que buscas?" +
        "\n(si no quieres ninguno, contestá en ninguno)"
    );
  }
  console.log("Se llevan " + numero1 + " tomos de One Piece");
  console.log(tomosDeOP);
  console.log(numero1);
});

//COMPRA DE ONE PIECE (Figura)
let figuraLuffy = document.getElementById("figuraLuffy");
figuraLuffy.addEventListener("click", () => {
  let numero3 = parseInt(
    prompt(
      "Cuantas figuras como esta queres?" +
        "\n(si no quieres ninguno, contestá en 0)"
    )
  );
  if (numero3 >= 0) {
    Snakeman = alert("Gracias por tu compra");
  }
  console.log("Se llevan " + numero3 + " figuras de Luffy");
});

//Pagar
let Pagar = document.getElementById("Pagar");
Pagar.addEventListener("click", () => {
  numero1 * 500 + numero3 * 8000;
});
