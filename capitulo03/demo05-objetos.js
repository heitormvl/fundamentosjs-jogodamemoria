// 1-Criando um objeto
const heroi = {
    nome: "Flash",
    idade: 100,
    sexo: "Masculino"
} // Novo objeto "heroi"

// 2-Listando as chaves
console.log("\n--- Listando as chaves ---\n") // Separador
console.log("Nome:", heroi.nome) // Mostra o nome do objeto "heroi"
console.log("Idade:", heroi.idade) // Mostra a idade do objeto "heroi"
console.log("Sexo:", heroi.sexo) // Mostra o sexo do objeto "heroi"

// 3-Criando novas chaves
console.log("\n--- Criando novas chaves ---\n") // Separador
heroi.id = 001 // Cria a chave "id" com o valor "001"
console.log("Heroi:", heroi) // Lista as chaves e valores do objeto "heroi"

// 4-Listando dados
console.log("\n--- Listando chaves ---\n") // Separador
console.log("Chaves de 'heroi':", Object.keys(heroi)) // Listando chaves do objeto
console.log("Valores de 'heroi'", Object.values(heroi)) // Listando valores do objeto

// 5-Juntando objetos
console.log("\n--- Juntando objetos ---\n") // Separador
const heroi2 = {
    altura: 1.8,
    peso: 90
} // Novo objeto "heroi2"
const heroi3 = Object.assign(heroi, heroi2) // Junta "heroi" e "heroi2" em um objeto "heroi3"
console.log("Heroi 3:", heroi3) // Mostra novo objeto

// 6-Deletando chaves
delete heroi3.peso
console.log("Heroi 3 sem peso:", heroi3)