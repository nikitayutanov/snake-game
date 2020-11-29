'use strict';

export const field = {
    element: document.querySelector('.field'),
    size: 21,
    hasFood: false,
    
    setGrid() {
        this.element.style.gridTemplateRows = `repeat(${ this.size }, 1fr)`;
        this.element.style.gridTemplateColumns = `repeat(${ this.size }, 1fr)`;
    },

    clear() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.lastChild);
        }
    }
};
