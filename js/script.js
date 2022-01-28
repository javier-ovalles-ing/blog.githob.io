
import {ButtonGoTop} from './bottom_go_top.js';
import btnMenu from './btn_menu.js';

console.log("se cargo script");

function Main(){

    console.log("se cargo main");

    ButtonGoTop();
    btnMenu();
}

document.addEventListener('DOMContentLoaded',Main());

