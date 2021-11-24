//EVENTOS de Compras
//COMPRA DE DB
let ItemDB = document.getElementById("ItemDB");
ItemDB.addEventListener("click", () => {
  let numero1 = parseInt(
    prompt(
      "Cuantos mangas de DBZ quieres?" +
        "\n(si no quieres ninguno, contestá en 0)"
    )
  );
  if (numero1 >= 0) {
    tomosDeDB = prompt(
      "Cuales son los tomos que buscas?" +
        "\n(si no quieres ninguno, contestá en ninguno)"
    );
  }
  console.log("Se llevan " + numero1 + " tomos de DBZ");
  console.log(numero1);
  console.log(tomosDeDB);

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
