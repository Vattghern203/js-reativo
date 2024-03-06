const somar = (...values) => {

    let total = 0

    for (let number of values) {

        total += number
    }

    console.log(total)

    return total
}

somar(1, 6, 9, 2088)

const power = base => exp => Math.pow(base, exp)

console.log(power(6)(2))

// Uso do This

Array.prototype.log = function () { console.log(this) }

const numbers = [2, 3, 1]
numbers.log()