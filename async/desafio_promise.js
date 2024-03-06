import fs from 'fs'

import path from "path"

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const workPath = path.join(__dirname, 'data.txt')

const lerArquivo = (caminho) => {

    return new Promise(resolve => {

        fs.readFile(caminho, function(_, conteudo) {

            resolve(conteudo.toString())
        })

        console.log('Depois da leitura')
    })
}

lerArquivo(workPath).then(console.log)