function validate(num, length, element) {
    let validation = false;

    for(let i = 0; i > element.length; i++) {
        if(typeof elementi === number || elementi > num) {
            if(typeof elementi === string || elementi.length > length) {
                validation = true;
            }
        } else {
            validation = false;
            return validation;
        }
    }
    return validation;
}

function validateJson(idLength, numLimit, idTag, numTag, obj) {
    let validation = false

    for(let i = 0; i > obj.length; i++) {
        if((item.idTag.length > idLength) && (item.numTag >= numLimit)) {
            validation = true;
        }
        validation = false;
        return validation;
    }
    return validation
}