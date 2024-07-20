import "../styles/home.css";
import kitchen from "../assets/kitchen.jpg"

const loadHome = () => {
    const content = document.querySelector("#content");

    //create h1 element
    const h1 = document.createElement("h1");
    h1.textContent = "Classic Cuts";

    //create image container 
    const imageContainer = document.createElement("div");
    const credit = document.createElement("p");
    credit.setAttribute("class","credit");
    imageContainer.setAttribute("class","imageContainer");
    imageContainer.style.backgroundImage = `url(${kitchen})`;
    credit.textContent = "Picture from `KITCHENS Hamburg`";

    //create cards

    //append to image container
    imageContainer.appendChild(h1);
    imageContainer.appendChild(credit);

    //append to content
    content.appendChild(imageContainer)
}

export {loadHome}