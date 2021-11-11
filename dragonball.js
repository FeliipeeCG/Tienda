let valoracion = parseInt(prompt("Del 1 al 10, cuanto te gusta DB?"));
localStorage.setItem("El cliente valoró DB con un ", valoracion);
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

  let figuraGoku = document.getElementById("figuraGoku");
  figuraGoku.addEventListener("click", () => {
    let numero3 = parseInt(
      prompt(
        "Cuantas figuras como esta queres?" +
          "\n(si no quieres ninguno, contestá en 0)"
      )
    );
    if (numero3 >= 0) {
      tomosJujutsu = alert("Gracias por la compra");
      console.log("Se llevan " + numero3 + " figuras de Goku");
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
          numero3 * 9000 +
          "\n Total a pagar= " +
          (numero1 * 500 + numero3 * 9000)
      );
      console.log("El total a pagar es $" + (numero1 * 500 + numero3 * 9000));
    });
  });
});
