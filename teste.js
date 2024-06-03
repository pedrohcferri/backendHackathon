const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("produtos.json"))
const novoDado = { id: '3', nome: 'Livro muito bom'}

fs.writeFileSync("produtos.json",JSON.stringify([...dadosAtuais, novoDado]))

console.log( JSON.parse(fs.readFileSync("produtos.json")))

