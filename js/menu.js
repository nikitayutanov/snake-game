'use strict';

import { food } from './food.js';
import { game } from './game.js';
import { snake } from './snake.js';

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

    hide() {
        document.querySelector('.menu:not(.hidden)').classList.add('hidden');
    }
}

menu.button.main.addEventListener('click', () => {
    snake.reset();
    game.start();
    menu.hide();
});

menu.button.pause.addEventListener('click', () => {
    game.unpause();
});

menu.button.gameOver.addEventListener('click', () => {
    snake.reset();
    food.reset();
    game.start();
    menu.hide();
});