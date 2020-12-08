'use strict';

export const score = {
    elements: document.querySelectorAll('.counter'),

    reset() {
        this.counter = 0;
    },

    draw() {
        for (const el of this.elements) {
            el.textContent = this.counter;
        }
    }
}