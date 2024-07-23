import "../styles/menu.css";
import loadDishes from "./helper/dishes";
import {home} from "./helper/cards";

const loadMenu = () => {
    console.log("menu.js loaded");
    const content = document.querySelector("#content");

    //clear page
    content.innerHTML = "";
    
    //load dishes
    loadDishes();

    //add cards
    home()
}

export default loadMenu