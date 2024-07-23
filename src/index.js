import {loadHome} from "./modules/home";
import background from "./assets/dark-wooden-texture-surface.jpg";

const body = document.querySelector("body");
body.style.backgroundImage = `url(${background})`;

loadHome();

