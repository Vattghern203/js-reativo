const cart = [
    { nome: 'caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'lapis', qtde: 3, preco: 5.82, fragil: true },
    { nome: 'tesoura', qtde: 1, preco: 19.20, fragil: false }
]

// Desafio
// 1 - Separar os produtos frágeis
// 2 - Quantidade * Preço, 
// Calcular média

const fragileFilter = element => element.fragil === true

const fragileProducts = cart.filter(fragileFilter)

console.log('Produtos frágeis: ', fragileProducts)

const productSum = product => product.qtde * product.preco

const sumOfTheProducts = fragileProducts.map(productSum)

console.log('soma de cada produto', sumOfTheProducts)

const processedProducts = cart
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, elem) => {

        const newQtde = acc.qtde + 1
        const newTotal = acc.total + elem
        
        console.log(acc, elem)

        return {
            qtde: newQtde,
            total: newTotal,
            media: newTotal / newQtde
        }
    }, { qtde: 0, total: 0, media: 0 })