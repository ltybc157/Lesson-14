window.addEventListener('load', function () {
    'use strict';
    let btn = document.querySelector('.main_btna');
    let modal = document.querySelector('.modal');
    let close = document.querySelector('.close');

    btn.addEventListener('click', function () {

        modal.style.display = 'block';
        

    });
    close.addEventListener('click', function () {
        modal.style.display = 'none';
     
    });

});