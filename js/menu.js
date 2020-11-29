'use strict';

export const menu = {
    element: document.querySelector('.menu'),

    resetButton: document.querySelector('.menu-button'),

    show() {
        this.element.classList.remove('hidden');
    },

    hide() {
        this.element.classList.add('hidden');
    }
}

menu.resetButton.addEventListener('click', () => {
    window.location.reload(false);
});