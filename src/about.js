const content = document.getElementById("content");

function renderAbout() {
  content.innerHTML = "";
  const titulo = document.createElement("h1");
  titulo.textContent = "About Us";

  const description = document.createElement("p");
  description.classList.add("homeDescription");
  description.innerHTML = `
      At Inka Flavors, we believe that food is more than just nourishment—it’s an experience, a story, and a connection to our roots.<br><br>
      Inspired by the rich culinary traditions of Peru, our mission is to bring you authentic flavors crafted with passion and the finest ingredients.<br><br>
      Our journey began with a deep love for Peruvian cuisine, where each dish tells a story of culture, tradition, and innovation. From the coastal freshness of Ceviche to the heartwarming richness of Ají de Gallina, we take pride in offering a menu that honors the heritage of Peru while embracing modern culinary techniques.<br><br>
      Our restaurant is more than just a place to eat; it’s a space where friends and families gather to share unforgettable moments over delicious food.<br><br>
      Whether you're tasting our signature Lomo Saltado for the first time or sipping on a refreshing Chicha Morada, we invite you to savor the essence of Peru with every bite.
  `;

  const location = document.createElement("h3");
  location.textContent =
    "Contact: +1 (555) 987-6543";
  content.append(titulo, description, location);
}

export { renderAbout };
