//COMPRA DE NARUTO
let ItemNaruto = document.getElementById("ItemNaruto");
ItemNaruto.addEventListener("click", () => {
  let numero1 = parseInt(
    prompt(
      "Cuantos mangas de Naruro quieres?" +
        "\n(si no quieres ninguno, contestá en 0)"
    )
  );
  if (numero1 >= 0) {
    tomosDeNaruto = prompt(
      "Cuales son los tomos que buscas?" +
        "\n(si no quieres ninguno, contestá en ninguno)"
    );
  }
  console.log("Se llevan " + numero1 + " tomos de Naruto");
  console.log(tomosDeNaruto);

  //Paguemos
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
