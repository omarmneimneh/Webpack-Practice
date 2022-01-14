import loadHome from "./modules/home.js";
import contactsLoader from "./modules/contact.js";
import menuLoader from "./modules/menu.js";
import css from './modules/style.css';

window.onload = loadHome()

const menuButtons = document.querySelectorAll('.menu')

menuButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        switch(button.innerHTML){
            case "Home":
                loadHome();
                break;
            case "Menu":
                menuLoader()
                break;
            case "Contact":
                contactsLoader();
                break;
        }
    })
})