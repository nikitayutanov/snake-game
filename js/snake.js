'use strict';

import { field } from './field.js';
import { food } from './food.js';

const midOfField = Math.round(field.size / 2);

export const snake = {
    className: 'snake',
    body: [
        { x: midOfField, y: midOfField }
    ],
    moveDirection: 'right',
    isCrashed: false,

    draw() {
        for (const element of this.body) {
            const snakeElement = document.createElement('div');
            snakeElement.classList.add(this.className);
    
            snakeElement.style.gridColumnStart = element.x;
            snakeElement.style.gridRowStart = element.y;
    
            field.element.appendChild(snakeElement);
        }
    },

    update() {
        this.head = { ...this.body[0] };

        this.move();

        if (this.isCrashedItself() || this.isCrashedWall()) {
            this.isCrashed = true;
        }

        if (this.isOnFood()) {
            field.hasFood = false;
        } else {
            this.body.pop();
        }

        this.body.unshift(this.head);
    },

    move() {
        switch (this.moveDirection) {
            case 'up':
                this.head.y--;
                break;
            case 'left':
                this.head.x--;
                break;
            case 'down':
                this.head.y++;
                break;
            case 'right':
                this.head.x++;
                break;
        }
    },

    isOnFood() {
        if (this.head.x === food.position.x && this.head.y === food.position.y) {
            return true;
        }
    },

    isCrashedItself() {
        for (let i = 1; i < this.body.length; i++) {
            if (this.head.x === this.body[i].x && this.head.y === this.body[i].y) {
                return true;
            }
        }
    },

    isCrashedWall() {
        if ((this.head.x < 1 || this.head.y < 1 || this.head.x > field.size || this.head.y > field.size)) {
            return true;
        }
    }
};