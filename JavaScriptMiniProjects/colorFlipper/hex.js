const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const header = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let hexNum = '#';
    for(let i = 0; i < 6; i++) {
        hexNum += hex[hexRandomizer()]
    }
    console.log(hexNum)
    header.textContent = hexNum;
    document.body.style.backgroundColor = hexNum;
})

const hexRandomizer = () => {
    return Math.floor(Math.random() * hex.length);
}