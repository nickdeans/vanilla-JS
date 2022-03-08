const data = [
    {
        text: 'text',
        hi: 'hi',
        hello: 'hello',
    },
    {
        text: 'text',
        hi: 'hi',
        hello: 'hello',
    },
    {
        text: 'text',
        hi: 'hi',
        hello: 'hello',
    },
    {
        text: 'text',
        hi: 'hi',
        hello: 'hellooo',
    },
]

const lis = document.querySelector('.li-container');
const prevBtn = document.querySelector('.prev-btn')

const liAdder = (data) => {
    data.forEach(li => {
        let block = 
        `
        <li class="li-element">
            <div>${li.text}</div>
            <div>${li.hi}</div>
            <div>${li.hello}</div> 
        </li>
        `

        lis.innerHTML += block
    })
}

prevBtn.addEventListener('click', () => {

})

liAdder(data)

