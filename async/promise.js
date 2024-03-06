let promessa = new Promise(() => console.log('Promessa cumprida!'))

const myOath = (value) => console.log(`${value} is my promise`)

let promessa2 = new Promise( function(myOath) {
    myOath(10)
})

promessa2.then((value) => console.log(value))

const mission = new Promise((oath) => oath(
    ['Jorge', 'Bran', 'James', 'Jon']
))

// O retorno de cada then se torna o próximo valor referenciado 
mission.then(value => value[1])

    .then(secondValue => {
        console.log(secondValue)
        
        return secondValue
    })

    .then(upperValue => {

        console.log(upperValue.toUpperCase())

        return upperValue.toUpperCase()
    })

    .then(console.log)
     