//Figuras
let figura1 = new Figura("Goku Blue", "./images/figuraGoku.png", 9000, "55cm");
let figura2 = new Figura("Kurama", "./images/figuraKurama.png", 8500, "50cm");
let figura3 = new Figura("Itadori", "./images/figuraItadori.png", 7000, "55cm");
let figura4 = new Figura("Luffy", "./images/figuraLuffy.png", 8000, "50cm");

//Figuras del Estante

let estante_figura = new Array();
estante_figura.push(figura1);
estante_figura.push(figura2);
estante_figura.push(figura3);
estante_figura.push(figura4);

//Estante
let estante = document.getElementById("estante");
$(document).ready(() => {
  for (let i = 0; i < estante_figura.length; i++) {
    let objeto_figura = estante_figura[i];
    $("#estante").append(
      `<div id="div${objeto_figura.getId()}"> 
        <h2>${objeto_figura.getTitle()}</h2>  
        <image src= ${objeto_figura.getSrcImage()}></image>
        <button id= "btn${objeto_figura.getId()}">Compralo! </button> 
    </div> 
  `
    );
    $(`#btn${objeto_figura.getId()}`).on("click", function () {
      alert(
        `Compraste la figura de ${objeto_figura.getNombre()} por $ ${objeto_figura.getPrecio()}`
      );
    });
  }
});
