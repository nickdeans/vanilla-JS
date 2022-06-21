const shippingData = {
    street: {
        name: "",
        number: ""
    },
    zipcode: "",
    contact: {
        phone: {
            area: "",
            exchange: "",
            subscriber: "",
        }
    }
}

const btn = document.querySelector('.btn');


function readFormObject(form) {
    
    let obj = {};
    
    const inputsList = form.querySelectorAll('.hi')
    const inputsLength = inputsList.length;
    for(let i = 0; i < inputsLength; i++) {
        const input = inputsList[i];
        obj[input.name] = input.value;
    }

    return obj;
}

const test = readFormObject(document.querySelector('.my-form'))
// const yup = document.querySelector('#test')

// console.log(yup)

//  

// setInterval(() => {
//     console.log(yup.value)
// },1000)