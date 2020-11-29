'use strict';

import { snake } from './snake.js';

export function checkControl() {
    document.addEventListener('keydown', (e) => {
        if ((e.key === 'ArrowUp' || e.key === 'w') && snake.moveDirection !== 'down') {
            snake.moveDirection = 'up';
        } else if ((e.key === 'ArrowLeft' || e.key === 'a') && snake.moveDirection !== 'right') {
            snake.moveDirection = 'left';
        } else if ((e.key === 'ArrowDown' || e.key === 's') && snake.moveDirection !== 'up') {
            snake.moveDirection = 'down';
        } else if ((e.key === 'ArrowRight' || e.key === 'd') && snake.moveDirection !== 'left') {
            snake.moveDirection = 'right';
        }
    }, { once : true });
}