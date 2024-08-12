import "./styles.css"
import { renderHomePage } from "./render-home"
import { renderMenuPage } from "./render-menu";

console.log("Hello! Earthling!")
//renderHomePage();

const home = document.getElementById("home");
home.addEventListener('click', () => renderHomePage());

const menu = document.getElementById("menu");
menu.addEventListener('click', () => renderMenuPage());
