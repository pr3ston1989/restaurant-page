import "./styles.css"
import { renderHomePage } from "./render-home"
import { renderMenuPage } from "./render-menu";
import { renderAboutPage } from "./render-about";

renderHomePage();

const home = document.getElementById("home");
home.addEventListener('click', () => renderHomePage());

const menu = document.getElementById("menu");
menu.addEventListener('click', () => renderMenuPage());

const about = document.getElementById("about");
about.addEventListener('click', () => renderAboutPage());