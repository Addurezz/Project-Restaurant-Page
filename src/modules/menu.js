const loadMenu = () => {
    const content = document.querySelector("#content");

    //clear page
    content.innerHTML = "";

    //create elements
    const menuDiv = document.createElement("div");


    //set classes for styling
    menuDiv.setAttribute("class","menuDiv");




    //append to content
    content.appendChild(menuDiv)
}

export default loadMenu