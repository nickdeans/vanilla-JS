// Creating map, filter, and reduce methods by creating functions on an array given a callback


Array.prototype.myMap = function (callback) {
    let newArr = [];
  
    for(let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this))
    }
    return newArr;
  }
  
Array.prototype.myFilter = function (callback) {
    let newArr = [];

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this) === true) {
        newArr.push(this[i])
        }
    }
    return newArr;
}

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for(let i = 0; i < this.length; i++) {
        if(i === 0 && initialValue == null) {
        accumulator = this[i]
        } else {
        accumulator = callback(accumulator, this[i], i, this)
        }
    }
    return accumulator;
}