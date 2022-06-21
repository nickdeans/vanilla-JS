const counter = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let current = e.currentTarget.classList;
        if(current.contains('decrease')) {
            count--
        } else if(current.contains('increase')) {
            count++
        } else {
            count = 0;
        }

        if(count < 0) {
            counter.style.color = 'red';
        } else if(count > 0) {
            counter.style.color = 'green';
        } else {
            counter.style.color = 'black'
        }
        counter.textContent = count;
    })
})