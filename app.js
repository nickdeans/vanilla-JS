"use strict";

const people = [
    {name: 'Jon', age: 23, job: 'none'},
    {name: 'Joe', age: 28, job: 'stuff'},
    {name: 'Jimmy', age: 20, job: 'cool'},
]

people.forEach(person => {
    console.log(person.name)
})

const personIt = (array) => {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

personIt(people)

const number1 = 23.323
let newNumber = Math.random() * 10
let round = Math.floor(newNumber)
console.log(round)

let pets = document.getElementsByTagName('li');
let newPets = [...pets]
newPets.forEach(pet => {
    pet.style.color = "green"
})

let first = document.querySelector('#pets');

const colors = ['red', 'green', 'blue', 'gold', 'silver', 'pink', 'orange']

const btn = document.getElementById("btn-1");
const colorIs = document.querySelector('.color');

btn.addEventListener("click", () => {
    const randomizer = colorRandomizer();
    console.log('hello')

    document.body.style.backgroundColor = colors[randomizer];
    colorIs.textContent = ` ${colors[randomizer]}`
    console.log(randomizer)
})

const colorRandomizer = () => {
    return Math.floor(Math.random() * colors.length)
}

const btn5 = document.querySelector('.buttonW')
const header = document.querySelector('.headerW')

btn5.addEventListener('click', () => {
    if(header.classList.contains('waddup')) {
        header.classList.remove('waddup')
    } else {
        header.classList.add('waddup')
    }
})