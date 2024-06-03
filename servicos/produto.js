const fs = require("fs")

function getTodosProdutos(){
    return JSON.parse(fs.readFileSync("produtos.json"))
}

function getProdutoPorId(id){
   const produtos = JSON.parse(fs.readFileSync("produtos.json"))

   const produtosFiltrado = produtos.filter(produto => produto.id === id) [0]
   return produtosFiltrado

}
function insereProduto(produtoNovo){
    const produtos = JSON.parse(fs.readFileSync("produtos.json"))
    
    const novaListaDeProdutos = [...produtos, produtoNovo]

    fs.writeFileSync("produtos.json", JSON.stringify(novaListaDeProdutos))
}

function modificaProduto(modificacoes, id){
    let produtosAtuais = JSON.parse(fs.readFileSync("produtos.json"))
    const indiceModificado = produtosAtuais.findIndex(produto => produto.id ===id)

    const conteudoMudado = {...produtosAtuais[indiceModificado], ...modificacoes }

    produtosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("produtos.json", JSON.stringify(produtosAtuais))
}   
function deletaProdutoPorId(id) {
    const produtos = JSON.parse(fs.readFileSync("produtos.json"))

    const produtosFiltrados = produtos.filter( produto => produto.id!== id )
    fs.writeFileSync("produtos.json", JSON.stringfy(produtosFiltrados))
}

module.exports = {
    getTodosProdutos,
    getProdutoPorId,
    insereProduto,
    modificaProduto,
    deletaProdutoPorId
}