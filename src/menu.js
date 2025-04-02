const content = document.getElementById("content");

import cevicheImg from "./imgs/ceviche.jpg";
import chichaImg from "./imgs/chicha.jpg";
const myBeverages = [];
class Beverages {
  constructor(name, description, price, photo, type) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.photo = photo;
    this.type = type;
  }
}

function addBeverages(name, description, price, photo, type) {
  const newBeverage = new Beverages(name, description, price, photo, type);
  myBeverages.push(newBeverage);
}

function renderMenu() {
  content.innerHTML = ""; // Limpiar el contenido previo

  const beverage = document.createElement("div");
  beverage.classList.add("beverage-section");
  const beverageTitulo = document.createElement("h1");
  beverageTitulo.textContent = "Beverage";
  beverage.appendChild(beverageTitulo);

  const sides = document.createElement("div");
  sides.classList.add("sides-section");
  const sidesTitulo = document.createElement("h1");
  sidesTitulo.textContent = "Sides";
  sides.appendChild(sidesTitulo);

  const mainDishes = document.createElement("div");
  mainDishes.classList.add("main-dishes-section");
  const mainDishesTitulo = document.createElement("h1");
  mainDishesTitulo.textContent = "Main Dishes";
  mainDishes.appendChild(mainDishesTitulo);

  content.append(beverage, sides, mainDishes);

  myBeverages.forEach((dish) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Crear elementos para cada atributo
    const name = document.createElement("h3");
    name.textContent = dish.name;

    const description = document.createElement("p");
    description.textContent = dish.description;

    const price = document.createElement("p");
    price.textContent = `Precio: $${dish.price}`;

    const photo = document.createElement("img");
    photo.src = dish.photo;
    photo.alt = dish.name;

    card.append(photo, name, description, price);

    if (dish.type === "beverage") {
      beverage.appendChild(card);
    } else if (dish.type === "side") {
      sides.appendChild(card);
    } else if (dish.type === "main") {
      mainDishes.appendChild(card);
    }
  });
}

addBeverages(
  "Chicha Morada",
  "Refrescante bebida tradicional peruana elaborada a base de maíz morado, aromatizada con canela y clavo de olor, y endulzada con un toque de frutas. Perfecta para acompañar cualquier plato.",
  "5",
  chichaImg,
  "beverage"
);

addBeverages(
  "Ceviche de Pescado",
  "Fresco y delicioso pescado marinado en jugo de limón, con ají, cebolla morada y cilantro, acompañado de choclo, camote y canchita. Un clásico de la gastronomía peruana que resalta por su explosión de sabores.",
  "12",
  cevicheImg,
  "side"
);

addBeverages(
  "Ají de Gallina",
  "Tiernos trozos de pechuga de pollo deshilachado en una cremosa y suave salsa a base de ají amarillo, leche y queso, servido con arroz blanco, papas sancochadas y huevo duro. Un plato lleno de sabor y tradición.",
  "12",
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/AjiDeGallinaPeruano.JPG",
  "main"
);

addBeverages(
  "Arroz con Mariscos",
  "Delicioso arroz sazonado con ají panca y especias, acompañado de una generosa mezcla de mariscos frescos, coronado con un toque de queso parmesano y perejil.",
  "15",
  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Arroz_con_mariscos_peruano.jpg",
  "main"
);


export { renderMenu };
