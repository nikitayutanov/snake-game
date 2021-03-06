'use strict';

import { snake } from './snake.js';
import { game } from './game.js';

function eventHandler(e) {
    if (
        (e.key === 'ArrowUp' || e.key === 'w') &&
        snake.moveDirection !== 'down'
    ) {
        snake.moveDirection = 'up';
    } else if (
        (e.key === 'ArrowLeft' || e.key === 'a') &&
        snake.moveDirection !== 'right'
    ) {
        snake.moveDirection = 'left';
    } else if (
        (e.key === 'ArrowDown' || e.key === 's') &&
        snake.moveDirection !== 'up'
    ) {
        snake.moveDirection = 'down';
    } else if (
        (e.key === 'ArrowRight' || e.key === 'd') &&
        snake.moveDirection !== 'left'
    ) {
        snake.moveDirection = 'right';
    }
}

export function checkControl() {
    document.addEventListener('keydown', eventHandler, { once: true });
}

document.addEventListener('keydown', (e) => {
    if (
        (e.key === 'Escape' || e.key === 'p') &&
        !game.isPaused &&
        game.isActive
    ) {
        game.pause();
    } else if ((e.key === 'Escape' || e.key === 'p') && game.isPaused) {
        game.unpause();
    }
});
