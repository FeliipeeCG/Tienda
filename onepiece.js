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

  //Pagar
  let Pagar = document.getElementById("Pagar");
  Pagar.addEventListener("click", () => {
    alert(
      "FACTURACION" +
        "\n Mangas comprados= " +
        numero1 +
        "\n Total = $" +
        numero1 * 500 +
        "\n Total a pagar= " +
        numero1 * 500
    );
    console.log("El total a pagar es $" + numero1 * 500);
  });
});
