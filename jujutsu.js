//COMPRA DE JUJUTSU
let ItemJujutsu = document.getElementById("ItemJujutsu");
ItemJujutsu.addEventListener("click", () => {
  let numero1 = parseInt(
    prompt(
      "Cuantos mangas de Jujutsu quieres?" +
        "\n(si no quieres ninguno, contestá en 0)"
    )
  );
  if (numero1 >= 0) {
    tomosJujutsu = prompt(
      "Cuales son los tomos que buscas?" +
        "\n(si no quieres ninguno, contestá en ninguno)"
    );
  }
  console.log("Se llevan " + numero1 + " tomos de Jujutsu");
  console.log(tomosJujutsu);

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
