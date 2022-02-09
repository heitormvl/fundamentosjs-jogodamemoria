// Obter valores do terminal

const args = process.argv
const saldo = args[args.length -1]
if(isNaN(saldo)) {
    console.log("Valor inválido!!!")
    return;
}

let tipoCliente = "premium"
if(saldo <= 9) {
    tipoCliente = "basic"
}
else if (saldo >=10 && saldo <=19) {
    tipoCliente = "gold"
}
else if (saldo >= 20) {
    tipoCliente = "black"
}
else {
    tipoCliente = null
}

if(!tipoCliente) {
    tipoCliente = "indefinido"
}

console.log("Tipo Do Cliente:", tipoCliente)

const idade = 18
const resultado = idade >= 18 ?
    "Pode dirigir" :
    "Não pode dirigir"
console.log("Resultado:", resultado)