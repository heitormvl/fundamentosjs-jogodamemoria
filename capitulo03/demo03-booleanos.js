const podeDirigir = true
if(podeDirigir) {
    console.log("Ela pode dirigir")
}

const saldoEmConta = 1
if(!saldoEmConta) {
    console.log("Não tem saldo")
}

/**
 * Força o valor para true ou false de acordo com a tabela Tipos Booleanos
 */
const boolComString = "Teste"
console.log("boolComString", !!boolComString)

//Negação
console.log("negação", !boolComString)

//Negação + forçar o Bool
console.log(
    "Negação + Forçar o Bool",
    !(!!boolComString)
)

console.log(!true)