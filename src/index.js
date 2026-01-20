
import "./style.css";
import { loadHome } from "./home.js";
import { menuFunction } from "./menu.js";
import { footerFunction, navigationFunction } from "./nav_and_footer.js";
import { contactFunction } from "./contact.js";

const home_btn = document.querySelector('.home');
const manu_btn = document.querySelector('.menu');
const contact_btn = document.querySelector('.contact');
home_btn.addEventListener('click', function() {
    loadHome();
})
manu_btn.addEventListener('click', function() {
    menuFunction();
})
contact_btn.addEventListener('click', function() {
    contactFunction();
})
