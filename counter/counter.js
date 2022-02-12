"use strict";

let count = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')) {
            count--
        } else if(styles.contains('increase')) {
            count++
        } else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green'
        } else if(count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }
        value.textContent = count;
    })
})



// let count1 = document.getElementById('value');
// let btnss = document.querySelectorAll('.btn');

// btnss.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         let count = 0;

//         if(e.currentTarget.classList.contains('increase')) {
//             count++
//         }
        

//         count1.textContent = count;
//     })
// })