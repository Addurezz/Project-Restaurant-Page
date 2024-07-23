import "../../styles/menu.css"

const loadDishes = () => {
    const content = document.querySelector("#content");
    console.log("Loading dishes...");

    // Create container for dishes
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menuDiv");

    // Create and append dish 1
    const dish1 = document.createElement("div");
    dish1.setAttribute("class", "dish");
    const dish1_title = document.createElement("h2");
    const dish1_text = document.createElement("p");

    dish1_title.innerText = "Dish 1 Title";
    dish1_text.innerText = "Description of dish 1.";

    dish1.appendChild(dish1_title);
    dish1.appendChild(dish1_text);

    // Create and append dish 2
    const dish2 = document.createElement("div");
    dish2.setAttribute("class", "dish");
    const dish2_title = document.createElement("h2");
    const dish2_text = document.createElement("p");

    dish2_title.innerText = "Dish 2 Title";
    dish2_text.innerText = "Description of dish 2.";

    dish2.appendChild(dish2_title);
    dish2.appendChild(dish2_text);

    // Append dishes to menuDiv
    menuDiv.appendChild(dish1);
    menuDiv.appendChild(dish2);

    // Append menuDiv to content
    content.appendChild(menuDiv);
    console.log("Dishes added to content.");
};

export default loadDishes