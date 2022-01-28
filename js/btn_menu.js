export default function BtnMenu() {
    console.log("Btn_Menu loaded");
    let $btnMenu = document.querySelector('.btn');
    let $menu = document.querySelector('#menu');

    $btnMenu.addEventListener('click',()=>{
        $menu.classList.toggle("active");

        console.log("funciona el boton")
    })
}