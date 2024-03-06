const things = [
    10, 20, 30, 40, 50, 60, 70, 666
]

const mockList = [ 1, 2, 3, 4, 5]

console.log(things.reduce((acc, item) => item + acc, 100))

console.log(mockList.reduce((acc, item) => item / acc))

// REDUCE IMPLEMENTATION

Array.prototype.my_reduce = function (callbackFn, initialValue) {
    
    let accumulator = initialValue || this[0]
    let currentValue = this[0]

    for (let idx = 0; idx < this.length; idx++) {

        currentValue = this[idx]
        
        accumulator = callbackFn(accumulator, currentValue, idx, this)
    }

    console.log("current value: ", accumulator)

    return accumulator
}

const mockFn = (acc, elem) => elem + acc

things.my_reduce(mockFn)