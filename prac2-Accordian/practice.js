// const boxes = document.querySelectorAll('.contentbx');

// boxes.forEach(box => {
//     box.addEventListener('click', () => {
//         box.classList.toggle('active');
//         console.log(box)
//     })
// })

const containers = document.querySelectorAll('.content-container');

containers.forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('active')
    })
})

