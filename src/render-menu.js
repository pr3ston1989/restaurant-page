import pizzaImage from "./img/pizza-4.jpg"

export function renderMenuPage() {
    const content = document.getElementById("content");
    const pizzas = ["Margherita", "Capricciosa", "Pepperoni", "Vegetarian"];

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    let header = document.createElement("h2");
    header.textContent = "Pizza:";
    content.appendChild(header);

    let cards = document.createElement("div");
    cards.classList.add("cards");

    pizzas.forEach(function(pizza) {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.alt = "pizza";
        img.src = pizzaImage;

        let container = document.createElement("div");
        container.classList.add("container");
        let para = document.createElement("p");
        para.textContent = pizza;

        container.appendChild(para);
        card.appendChild(img);
        card.appendChild(container);
        cards.appendChild(card);
    });

    content.appendChild(cards);
}