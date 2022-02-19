"use strict";

const btn = document.querySelector('.btn');
const img = document.querySelector('.img');
const text = document.querySelector('.text');
const URL = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', async() => {
    // Using Async/Await (syntatic sugar) + Try Catch Block
    try{
        const data = await fetch(URL);
        const response = await data.json();
        displayData(response);
    } catch(error) { 
        console.log(error);
    }

    // Using a promise
    // fetch(URL)
    //     .then((data) => data.json())
    //     .then((response) => displayData(response))
    //     .catch((err) => console.log(err));
})

const displayData = ({ value: joke }) => {
    console.log(joke)
    img.classList.add('shake-img');
    text.textContent = joke;
    const random = Math.random() * 1000;
    setTimeout(() => {
      img.classList.remove('shake-img');
    }, random);
  }

