'use strict';

import { field } from './field.js';
import { snake } from './snake.js';
import { food } from './food.js';
import { checkControl } from './control.js';
import { menu } from './menu.js';
import { score } from './score.js';

const pause = 'pause';
const gameOver = 'gameOver';

export const game = {
    isActive: false,
    isPaused: false,

    loop() {
        this.update();

        if (snake.isCrashed) {
            menu.show(gameOver);
            this.stop();
            return;
        };
        
        this.draw();
    },

    update() {
        checkControl();
        snake.update();
        food.update();
    },

    draw() {
        field.clear();
        snake.draw();
        food.draw();
        score.draw();
    },

    start() {
        this.interval = setInterval(this.loop.bind(this), 500);
        this.isActive = true;
    },

    stop() {
        clearInterval(this.interval);
        this.isActive = false;
    },

    pause() {
        this.stop();
        menu.show(pause);
        this.isPaused = true;
    },

    unpause() {
        this.start();
        menu.hide();
        this.isPaused = false;
    }
}