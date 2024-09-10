"use strict";

(function(){

    const openMenu = document.querySelector(".menu-open");
    const closeMenu = document.querySelector(".menu-close");

    openMenu.addEventListener('click', function (){
        const sideMenu = document.querySelector('.side-menu');                
        sideMenu.style.right ='0';              
    });

    closeMenu.addEventListener('click', function (){
        const sideMenu = document.querySelector('.side-menu');
        sideMenu.style.right = "-175px";
    });

})();
