import pizzaImage from "./img/pizza-2.jpg"

export function renderHomePage() {
    const content = document.getElementById("content");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    let headerOne = document.createElement("h1");
    headerOne.textContent = "Damiano's Pizza";
    
    let img = document.createElement("img");
    img.alt = "home made pizza";
    img.src = pizzaImage;

    let headerTwo = document.createElement("h2");
    headerTwo.textContent = "Don't let hunger take control!";

    let para = document.createElement("p");
    para.textContent = "We offer pickup and delivery, so you can enjoy your meal anywhere!";

    content.appendChild(headerOne);
    content.appendChild(img);
    content.appendChild(headerTwo);
    content.appendChild(para);
}