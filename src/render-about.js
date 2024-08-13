import pizzaImage from "./img/pizza-3.jpg"
import breadImage1 from "./img/bread-1.jpg"
import breadImage2 from "./img/bread-2.jpg"

export function renderAboutPage() {
    const content = document.getElementById("content");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    let header = document.createElement("h2");
    header.textContent = "About me:";
    content.appendChild(header);

    let para1 = document.createElement("p");
    para1.textContent = "Few years ago i found Facebook group about making pizza napoletana.";
    content.appendChild(para1);

    let img1 = document.createElement("img");
    img1.alt = "home made pizza";
    img1.classList.add("about");
    img1.src = pizzaImage;
    content.appendChild(img1);

    let para2 = document.createElement("p");
    para2.textContent = "Some time later I also started making bread.";
    content.appendChild(para2);

    let container = document.createElement("div");
    container.classList.add("bread");

    let img2 = document.createElement("img");
    img2.alt = "home made bread";
    img2.classList.add("about");
    img2.src = breadImage1;

    let img3 = document.createElement("img");
    img3.alt = "home made bread";
    img3.classList.add("about");
    img3.src = breadImage2;

    container.appendChild(img2);
    container.appendChild(img3);

    content.appendChild(container);
}