const textoPar = "Par"
const textoImpar = "Ímpar"
// for(let index = 0; index <=10; index++) {
//     const decisão = index % 2 === 0 ? textoPar : textoImpar
//     console.log(`O número ${index} é ${decisão}`)
// }
const minhaLista = [
    {
        id: parseInt(Math.random() *10),
        nome: "Zezinho",
        superPoder: "Veloz"
    }, 
]
const minhaLista1 = [
    {
        id: parseInt(Math.random() *10),
        nome: "Mariazinho",
        superPoder: "Super Forte"
    }, 
]
console.log(minhaLista, minhaLista1)
for(let index = 0; index < minhaLista.length; index ++) {
    const item = minhaLista[index]
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}
        `
    )
}

// Não precisa do contador
for(const index in minhaLista) {
    const item = minhaLista[index]
    console.log("ID:", item.id, "\nNome:", item.nome,)
}

// Não precisa usar index
for(const item of minhaLista) {
    console.log("ID:", item.id, "\nNome:", item.nome)
}