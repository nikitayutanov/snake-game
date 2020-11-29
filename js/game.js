'use strict';

import { field } from './field.js';
import { snake } from './snake.js';
import { food } from './food.js';
import { checkControl } from './control.js';
import { menu } from './menu.js';

field.setGrid();

function main() {
    update();

    if (snake.isCrashed) {
        menu.show();
        clearInterval(game);
        return;
    };
    
    draw();
}

function draw() {
    field.clear();
    snake.draw();
    food.draw();
};

function update() {
    checkControl();
    snake.update();
    food.update();
}

const game = setInterval(main, 250);
