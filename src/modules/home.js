import "../styles/home.css";
import kitchen from "../assets/kitchen.jpg";
import food from "../assets/food.jpeg";

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
    const menuCardDiv = document.createElement("div");
    menuCardDiv.setAttribute("class","menuCardDiv");
    const menuCard = document.createElement("div");
    menuCard.setAttribute("class","menuCard");
    const foodPicture = document.createElement("img");
    const menuP = document.createElement("p");
    const menuH2 = document.createElement("h2");
    const menuText = document.createElement("div");
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Zur Speisekarte"
    foodPicture.src = food;
    menuH2.textContent = "Unsere Speisekarte";
    menuP.textContent = "Für uns ist Qualität das A & O. Sie finden in unserer Speisekarte eine ganze Reihe Auswahl, von Steaks und Pasta bis hin zu vegetarischen Gerichten. Lassen Sie sich begeistern und schauen sie rein";

    menuText.appendChild(menuH2);
    menuText.appendChild(menuP);
    menuText.appendChild(menuBtn);
    menuCard.appendChild(foodPicture);
    menuCard.appendChild(menuText);
    menuCardDiv.appendChild(menuCard);




    //append to image container
    imageContainer.appendChild(h1);
    imageContainer.appendChild(credit);

    //append to content
    content.appendChild(imageContainer);
    content.appendChild(menuCardDiv)
}

export {loadHome}