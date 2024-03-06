const arr = [10, 20, 40, 60]

const [x, ,y] = arr

console.log(x, y)

// ---

const generateNumbersBetweenMinMax = (min, max) => {

    if (min > max) {

        [max, min] = [min, max]
    }

    return new Promise(resolve => {

        const random = parseInt(Math.random() * (max - min + 1) + min)

        resolve(random)
    }) 
}

generateNumbersBetweenMinMax(24, 69).then(console.log)