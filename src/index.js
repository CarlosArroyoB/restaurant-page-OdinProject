import "./styles.css";
import { renderMenu } from "./menu.js";
import {renderAbout} from "./about.js"
// Selección de elementos del DOM
const menuButton = document.getElementById("menuButton");
const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const content = document.getElementById("content");

function renderHome() {
  content.innerHTML = "";
  const titulo = document.createElement("h1");
  titulo.textContent = "Andean Bites";

  const description = document.createElement("p");
  description.classList.add("homeDescription");
  description.textContent =
    "At Inka Flavors, we bring the authentic taste of Peru straight to your table. Our dishes are crafted with the freshest ingredients and inspired by traditional recipes passed down through generations. From the zesty Ceviche de Pescado to the comforting Ají de Gallina, every bite is a journey through Peru’s rich culinary heritage. We take pride in blending tradition with modern culinary techniques, ensuring that each dish delivers an explosion of flavor. Whether you're savoring a refreshing Chicha Morada or indulging in our perfectly grilled Anticuchos, you’ll experience the warmth and passion of Peruvian cuisine. Join us for an unforgettable dining experience where vibrant flavors, warm hospitality, and a cozy atmosphere come together. ¡Buen provecho!";

    const location = document.createElement("h3")
    location.textContent= "123 Andean Street, Lima District, New York City, NY 10001, USA"
    content.append(titulo,description,location)
}

// Inicializar eventos
function initializeEvents() {
  menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    renderMenu();
  });

  homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    renderHome();
  });

  aboutButton.addEventListener("click", () => {
    content.innerHTML = ""; 
    renderAbout();
  });
}

// Inicializar la aplicación
function initializeApp() {
  renderHome();
  initializeEvents();
}

initializeApp();
