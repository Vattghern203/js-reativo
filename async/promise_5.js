function canFunctionOrNot(value, ErrorChance) {

    return new Promise((resolve, reject) => {

        Math.random() < ErrorChance ? reject("An error ocurred") : resolve(value)
    })
}

canFunctionOrNot('Teste', 0.5)
    .then(console.log)
    .catch(err => console.error(`Error: ${err}`))