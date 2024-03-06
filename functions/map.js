const values = [
    1, 2, 3, 4, 5
]

/**
 * 
 * @param {string | number} n Valores do Array
 * @param {Number} i Índice de cada valor no Array
 * @param {string[] | number[]} a O próprio Array
 * @returns {Array}
 */
const double = (n, i, a) => n * 2 + i + a.length

console.log(values.map(double))

// Desafio

const cart = [

    { nome: 'caneta', qtde: 10, preco: 7.99 },
    { nome: 'impressora', qtde: 0, preco: 649.50 },
    { nome: 'caderno', qtde: 4, preco: 27.10 },
    { nome: 'lapis', qtde: 3, preco: 5.82},
    { nome: 'tesoura', qtde: 1, preco: 19.20}
]

const getNames = element => element.nome

const evaluateStorage = element => element.qtde * element.preco

const productNames = cart.map(getNames)
const evaluatedStorage = cart.map(evaluateStorage)

console.log(productNames.concat(evaluatedStorage))

// Implementing the map function

Array.prototype.my_map = function(fn) {

    const mapped = []

    for (let i = 0; i < this.length; i++) {

        mapped.push(
            fn(
                this[i], 
                i, 
                this
            ))
    }
}


const print = el => console.log(el)

cart.my_map(print)