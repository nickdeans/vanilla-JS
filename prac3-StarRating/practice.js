const stars = document.querySelectorAll('.star');
const starsArray = [...stars]

starsArray.forEach(star => {
    star.addEventListener('mouseover', (e) => {
        if(e.currentTarget === starsArray[0]) {
            star.classList.add('active');
        } else if(e.currentTarget === starsArray[1]) {
            star.classList.add('active');
            starsArray[0].classList.add('active')
        } else if(e.currentTarget === starsArray[2]) {
            star.classList.add('active');
            starsArray[0].classList.add('active')
            starsArray[1].classList.add('active')
        } else if(e.currentTarget === starsArray[3]) {
            star.classList.add('active');
            starsArray[0].classList.add('active')
            starsArray[1].classList.add('active')
            starsArray[2].classList.add('active')
        } else if(e.currentTarget === starsArray[4]) {
            star.classList.add('active');
            starsArray[0].classList.add('active')
            starsArray[1].classList.add('active')
            starsArray[2].classList.add('active')
            starsArray[3].classList.add('active')
        }
    })
})

starsArray.forEach(star => {
    star.addEventListener('click', (e) => {
        if(e.currentTarget === starsArray[0]) {
            star.classList.add('active');
            e.preventDefault()
        } else if(e.currentTarget === starsArray[1]) {
            star.classList.add('active');
            starsArray[0].classList.add('active')
        } else if(e.currentTarget === starsArray[2]) {
            star.classList.add('active');
            starsArray[0].classList.add('active')
            starsArray[1].classList.add('active')
        } else if(e.currentTarget === starsArray[3]) {
            star.classList.add('active');
            starsArray[0].classList.add('active')
            starsArray[1].classList.add('active')
            starsArray[2].classList.add('active')
        } else if(e.currentTarget === starsArray[4]) {
            star.classList.add('active');
            starsArray[0].classList.add('active')
            starsArray[1].classList.add('active')
            starsArray[2].classList.add('active')
            starsArray[3].classList.add('active')
        }
    })
})


starsArray.forEach(star => {
    star.addEventListener('mouseleave', (e) => {
        if(e.currentTarget === starsArray[0]) {
            star.classList.remove('active');
        } else if(e.currentTarget === starsArray[1]) {
            star.classList.remove('active');
            starsArray[0].classList.remove('active')
        } else if(e.currentTarget === starsArray[2]) {
            star.classList.remove('active');
            starsArray[0].classList.remove('active')
            starsArray[1].classList.remove('active')
        } else if(e.currentTarget === starsArray[3]) {
            star.classList.remove('active');
            starsArray[0].classList.remove('active')
            starsArray[1].classList.remove('active')
            starsArray[2].classList.remove('active')
        } else if(e.currentTarget === starsArray[4]) {
            star.classList.remove('active');
            starsArray[0].classList.remove('active')
            starsArray[1].classList.remove('active')
            starsArray[2].classList.remove('active')
            starsArray[3].classList.remove('active')
        }
    })
})





