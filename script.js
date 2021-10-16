
'use strict';

let isOpen = false;

let grid = document.querySelector('.grid');

let bouton = document.querySelector('.btn');

document.querySelector('.btn').addEventListener('click', function (){

    if(!isOpen){
        grid.classList.remove('hidden');

        bouton.textContent = "Fermer";
        isOpen = true;
    }else{
        grid.classList.add('hidden'); 

        bouton.textContent = "Cliquez";
        isOpen = false;
    };
    

});




