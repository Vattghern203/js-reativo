import fs from 'fs'

import path from "path"

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const workPath = path.join(__dirname, 'data.txt')

const showContent = (err, content) => {

    console.log(content.toString())
} 

fs.readFile(workPath, {}, showContent)