import "../styles/home.css";
import {menu, about} from "./helper/cards";
import kitchen from "../assets/kitchen.jpg";

const loadHome = () => {
    const content = document.querySelector("#content");

    //clear page
    content.innerHTML = "";

    //create h1 element
    const h1 = document.createElement("h1");
    h1.textContent = "Classic Cuts";
    const imageContainer = document.createElement("div");
    const credit = document.createElement("p");
    credit.setAttribute("class","credit");
    imageContainer.setAttribute("class","imageContainer");
    imageContainer.style.backgroundImage = `url(${kitchen})`;
    credit.textContent = "Picture from `KITCHENS Hamburg`";

    //append to image container
    imageContainer.appendChild(h1);
    imageContainer.appendChild(credit);
    
    //append to content
    content.appendChild(imageContainer);

    menu();
    about();
}

export default loadHome