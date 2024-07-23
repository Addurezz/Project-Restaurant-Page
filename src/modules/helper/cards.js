import food from "../../assets/food.jpeg";
import aboutUs from "../../assets/about.jpg";
import loadMenu from "../menu";
import loadHome from "../home";

const menu = () => {
    //create elements for card
    const menuCardDiv = document.createElement("div");
    const menuCard = document.createElement("div");
    const foodPicture = document.createElement("img");
    const menuP = document.createElement("p");
    const menuH2 = document.createElement("h2");
    const menuText = document.createElement("div");
    const menuBtn = document.createElement("button");

    //set classes for <div> to target it in css
    menuCardDiv.setAttribute("class","menuCardDiv");
    menuCard.setAttribute("class","menuCard card1");

    //display text
    menuBtn.textContent = "Zur Speisekarte"
    foodPicture.src = food;
    menuH2.textContent = "Unsere Speisekarte";
    menuP.textContent = "Für uns ist Qualität das A & O. Sie finden in unserer Speisekarte eine ganze Reihe Auswahl, von Steaks und Pasta bis hin zu vegetarischen Gerichten. Lassen Sie sich begeistern und schauen sie rein";

    //button
    menuBtn.addEventListener("click", () => {
        console.log("MenuBtn Ok")
        loadMenu();
    })

    //append elements to display card
    menuText.appendChild(menuH2);
    menuText.appendChild(menuP);
    menuText.appendChild(menuBtn);
    menuCard.appendChild(foodPicture);
    menuCard.appendChild(menuText);
    menuCardDiv.appendChild(menuCard);

    //append to content
    content.appendChild(menuCardDiv)
}

const about = () => {
    //create elements for card
    const menuCardDiv = document.createElement("div");
    const menuCard = document.createElement("div");
    const aboutPicture = document.createElement("img");
    const menuP = document.createElement("p");
    const menuH2 = document.createElement("h2");
    const menuText = document.createElement("div");
    const menuBtn = document.createElement("button");

    //set classes for <div> to target it in css
    menuCardDiv.setAttribute("class","menuCardDiv");
    menuCard.setAttribute("class","menuCard card2");

    //display text
    menuBtn.textContent = "Über uns"
    aboutPicture.src = aboutUs;
    menuH2.textContent = "HOFZWANZIG – HIER TRIFFT TRADITION AUF MODERNE";
    menuP.textContent = "Willkommen bei Hofzwanzig – Restaurant und Pension in Dresden Laubegast, Ihrem kulinarischen und gastfreundlichen Rückzugsort. Unser Restaurant, unsere Pension und unser Catering-Service bieten Ihnen unvergessliche Erlebnisse, die das Beste der deutschen Küche und Gastfreundschaft vereinen.";

    //append elements to display card
    menuText.appendChild(menuH2);
    menuText.appendChild(menuP);
    menuText.appendChild(menuBtn);
    menuCard.appendChild(menuText);
    menuCard.appendChild(aboutPicture);
    menuCardDiv.appendChild(menuCard);

    //append to content
    content.appendChild(menuCardDiv)
}

const home = () => {
    const content = document.querySelector("#content");
    const menuBtn = document.createElement("button");
    menuBtn.innerText = "Zurück zur Homepage";

    menuBtn.addEventListener("click", () => loadHome());

    content.appendChild(menuBtn)
}

export {menu,about,home}