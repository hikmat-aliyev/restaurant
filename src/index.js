console.log('gorsey dee');
import { pageLoad } from "./initialPage";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";

document.addEventListener('DOMContentLoaded', () => {
    pageLoad();

    const menuButton = document.getElementById("menu-button");
    menuButton.addEventListener("click", () => {
        menuLoad();
    });

    const homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", () => {
        pageLoad();
    });

    const contactButton = document.getElementById("contact-button");
    contactButton.addEventListener("click", () => {
        contactLoad();
    });

});


