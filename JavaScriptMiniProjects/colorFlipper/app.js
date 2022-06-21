const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const header = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let random = colorRandomizer();
    header.textContent = colors[random];
    document.body.style.backgroundColor = colors[random];
})

const colorRandomizer = () => {
    return Math.floor(Math.random() * colors.length);
}