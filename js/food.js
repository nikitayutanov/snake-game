'use strict';

import { field } from './field.js';
import { snake } from './snake.js';

export const food = {
    className: 'food',
    position: { x: 0, y: 0 },

    reset() {
        field.hasFood = false;
    },

    update() {
        if (!field.hasFood) {
            this.position = getRandomPos();
            field.hasFood = true;
        }
    },
    
    draw() {
        const foodElement = document.createElement('div');
        foodElement.classList.add('food');          
                   
        foodElement.style.gridColumnStart = this.position.x;
        foodElement.style.gridRowStart = this.position.y;

        field.element.appendChild(foodElement);
    }
};

function randomFieldCoord() {
    return Math.floor(Math.random() * field.size + 1);
};

function getRandomPos() {
    setRandomPos: while (true) {
        const x = randomFieldCoord();
        const y = randomFieldCoord();
        
        for (const element of snake.body) {
            if (element.x === x && element.y === y) {
                continue setRandomPos; 
            }
        }

        return { x: x, y: y };
    }
}