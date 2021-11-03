//COMPRA DE ONE PIECE
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
  let figuraLuffy = document.getElementById("figuraLuffy");
  figuraLuffy.addEventListener("click", () => {
    let numero3 = parseInt(
      prompt(
        "Cuantas figuras como esta queres?" +
          "\n(si no quieres ninguno, contestá en 0)"
      )
    );
    if (numero3 >= 0) {
      tomosJujutsu = alert("Gracias por la compra");
      console.log("Se llevan " + numero3 + " figuras de Luffy");

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
            numero3 * 8000 +
            "\n Total a pagar= " +
            (numero1 * 500 + numero3 * 8000)
        );
        console.log("El total a pagar es $" + (numero1 * 500 + numero3 * 8000));
      });
    }
  });
});
