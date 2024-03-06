const generateNumbersBetweenMinMax = (min, max, time=2000) => {

    if (min > max) {

        [max, min] = [min, max]
    }

    return new Promise(resolve => {

        setTimeout(() => {
            
            const random = parseInt(Math.random() * (max - min + 1) + min)
    
            resolve(random)

        }, time);

    }) 
}

console.time('promise')

const generateNumberXTimes = () => Promise.all([
    generateNumbersBetweenMinMax(1, 100, 4000),
    generateNumbersBetweenMinMax(1, 2, 4000),
    generateNumbersBetweenMinMax(100, 200, 3000)
])

generateNumberXTimes()
    .then(console.log)
    .then(() => {

        console.timeEnd('promise')
    })