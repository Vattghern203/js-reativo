// 1 - Passar funções como arguemnto

function executeAnything (fn) {

    console.log('the type of this var is:', typeof fn)

    typeof fn === 'function' ? fn() : undefined
}

const fn = () => console.log('funcei')

executeAnything(fn)

// 2 - Retornar uma função a partir de outra função

const potencia = (base, exp) => Math.pow(base, exp)

console.log(potencia(2, 10))

const potencia2 = (base) => {

    return (exp) => Math.pow(base, exp)
}

const valor2 = potencia2(2)
console.log(valor2(8))

// pode ser feito assim também

console.log(potencia2(2)(8)) // -> 256

// DESAFIOS

// D1 - Somar (3) (4) (5)

const somaSequencial = (x) => (y) => (z) => console.log(x + y + z)

somaSequencial(3)(4)(5)

// D2 - Calcular (3) (7) (fn) - fn sendo uma função que multiplique os dois valores anteriores.

const calculoSequencial = (x) => (y) => (operacao) => {

    const operações = ['+', '-', '/', '*']

    let result = 0

    switch (operacao) {

        case '+':

            result = x + y

            break

        case '-':

            result = x - y

            break

        case '/':

            result = x / y

            break

        case '*':

            result = x * y

            break

        default:

            console.log('Operação não encotrada!')
    }

    return result
}

console.log(calculoSequencial(2)(1)('-'))