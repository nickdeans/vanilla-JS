"use strict";

const modalBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal');

    console.log('Hello World')
})

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})