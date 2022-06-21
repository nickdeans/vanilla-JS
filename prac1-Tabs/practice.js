const tabs = document.querySelectorAll('.tabs');
const div = document.querySelector('.div')

const removeClasses = () => {
    tabs.forEach(tab => {
            tab.classList.remove('active')
    })
}

const tabSelector = () => {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            console.log('hi')
            removeClasses();
            tab.classList.add('active')
    
            let label = tab.dataset.label
            div.textContent = data[label].text;
        })
    })
}

const data = [
    { text: 'hello'},
    { text: 'hi'},
    { text: 'hola'},
]

tabSelector()


// const tabs = document.querySelectorAll('.tabs');
// const div = document.querySelector('.div-container')

// const removeClass = (tabs) => {
//     tabs.forEach(tab => {
//         tab.classList.remove('active')
//     })
// }

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         removeClass(tabs);
//         tab.classList.add("active")

//         let label = tab.dataset.label;
//         div.textContent = `${divText[label].text}`
//     })
// })

// const divText = [
//     {text: 'Hello world'},
//     {text: 'Hi world'},
//     {text: 'Hola world'},
// ]




