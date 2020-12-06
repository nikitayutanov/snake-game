'use strict';

import { game } from './game.js';

const main = 'main';

export const menu = {
    element: {
        main: document.querySelector('.main'),
        pause: document.querySelector('.pause'),
        gameOver: document.querySelector('.game-over'),
    },
    
    button: {
        main: document.querySelector('.main .button'),
        pause: document.querySelector('.pause .button'),
        gameOver: document.querySelector('.game-over .button'),
    },

    show(type) {
        menu['element'][type].classList.remove('hidden');
    },

    hide(type) {
        this['element'][type].classList.add('hidden');
    }
}

menu.button.main.addEventListener('click', () => {
    game.start();
    menu.hide(main);
});

menu.button.pause.addEventListener('click', () => {
    game.unpause();
});

menu.button.gameOver.addEventListener('click', () => {
    window.location.reload(false);
});