const images = [
    "https://images.pexels.com/photos/11189614/pexels-photo-11189614.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2931915/pexels-photo-2931915.jpeg?cs=srgb&dl=pexels-darius-krause-2931915.jpg&fm=jpg",
    "https://images.pexels.com/photos/8727447/pexels-photo-8727447.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-8727447.jpg&fm=jpg"
 ];

const img = document.querySelector('.test');

let index = 0;
 
const imagesModal = () => {

    // img.setAttribute("src", `${images[arrayRadomizer(images)]}`)
    img.src = images[index]
    if(index > images.length - 1) {
        index = 0
    } else {
        index++
    }
    img.classList.add('styling')
    img.style.opacity = '0';
 }

 window.onload = function () {
     setInterval(imagesModal, 1000)
 }


