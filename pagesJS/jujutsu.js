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
  let figuraItadori = document.getElementById("figuraItadori");
  figuraItadori.addEventListener("click", () => {
    let numero3 = parseInt(
      prompt(
        "Cuantas figuras como esta queres?" +
          "\n(si no quieres ninguno, contestá en 0)"
      )
    );
    if (numero3 >= 0) {
      tomosJujutsu = alert("Gracias por la compra");
      console.log("Se llevan " + numero3 + " figuras de Itadori");
    }
    //Paguemos

    let Pagar = document.getElementById("Pagar");
    Pagar.addEventListener("click", () => {
      alert(
        "FACTURACION" +
          "\n Mangas comprados= " +
          numero1 +
          "\n Total = $" +
          numero1 * 500 +
          "\n Figuras compradas = " +
          numero3 +
          "\n Total = $" +
          numero3 * 7000 +
          "\n Total a pagar= " +
          (numero1 * 500 + numero3 * 7000)
      );
      console.log("El total a pagar es $" + (numero1 * 500 + numero3 * 7000));
    });
  });
});
