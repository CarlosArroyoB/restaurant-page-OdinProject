import cevichito from "./ceviche.jpg";

const content = document.getElementById("content");
const menuCard = document.createElement("div");

const imageCevichito = document.createElement("img");
imageCevichito.src = cevichito;

menuCard.classList.add("menuCard");

// Agregar la imagen y el texto al contenedor
// menuCard.appendChild(imageCevichito);
const description = document.createElement("p");
description.textContent = "Este es un plato de comida";
menuCard.appendChild(description);

content.appendChild(menuCard);