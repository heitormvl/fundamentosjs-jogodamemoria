const { copyFileSync } = require('fs')
const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const textoMenu = `
Olá, seja bem-vindo ao sistema de médias!
Digite 1 para acessar o menu principal;
Digite 2 para acessar o menu de herois;
Digite 3 para acessar o menu de guerreiras;
Digite 0 para sair;
`
// console.log('textoMenu', textoMenu)
// const opcao = 4
// switch(opcao) {
//     case 1:
//         console.log("Pressionou 1")
//         break;
//     case 2:
//         console.log("Pressionou 2")
//         break;
//     case 3:
//         console.log("Pressionou 3")
//         break;
//     default:
//         console.log("Opção inválida")
//         break;
// }

// terminal.question("Qual o seu nome? ", (msg) => {
//     console.log("Você escreveu:", msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: "Submenu! Pressione ENTER para selecionar mais opções...",
        fn: opcao1
    }
}
function opcao1(msg) {
    console.log("Não há mais opções!")
}
function menuInicial(msg) {
    const opcao = Number(msg)
    if(isNaN(opcao)) {
        throw new Error(msg, 'Não é um número')
    }
    switch(opcao) {
        case 0:
            console.log("Saindo...")
            terminal.close()
            break;
        case 1:
            console.log("Menu Principal")
            break;
        case 2:
            console.log("Menu de Herois")
            break;
        case 3:
            console.log("Menu de Guerreiras")
            break;
        default:
            console.log("Opção Inválida!")
            terminal.close()
            break;
    }
}

terminal.question (
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)