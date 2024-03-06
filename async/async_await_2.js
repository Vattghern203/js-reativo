const generateNumbersBetweenMinMax = (min, max, excludeNumbers) => {

    if (min > max) {

        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {

        const random = parseInt(Math.random() * (max - min + 1) + min)

        excludeNumbers.includes(random) ? reject('Número repetido!') : resolve(random)
    }) 
}

const generatedNumberXTimes = async (numQnt) => {

    const numbers = []

    for(let _ of Array(numQnt).fill()) {

        numbers.push(await generateNumbersBetweenMinMax(1, 60, numbers))
    }

    return numbers
}

generatedNumberXTimes(6)
    .then(console.log)
    .catch(console.error)