const { resolve } = require('path/posix')
const { reject } = require('q')
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question("Qual o seu nome?\n", nome => {
//     terminal.question("Qual o seu telefone?\n", telefone => {
//         console.log(
//         `
//         Nome: ${nome},
//         Telefone: ${telefone}
//         `
//         )
//         terminal.close()
//     })
// })

function questionAsync(texto) {
    return new Promise((resolve,reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

Promise.resolve()
    .then(() => questionAsync("Qual o seu nome?"))
    .then(respostaNome => {
        if(!respostaNome) throw new Error("CAMPO VAZIO")
        nome = respostaNome
    })
    .then(() => questionAsync("Qual o seu telefone?"))
    .then(respostaTelefone => {
        if(!respostaTelefone) throw new Error("CAMPO VAZIO")
        telefone = respostaTelefone
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    })
    .catch(error => {
        console.log("DEU RUIM", error.stack)
    })
    .finally(() => terminal.close())