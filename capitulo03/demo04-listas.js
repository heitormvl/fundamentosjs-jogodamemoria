// 1-Criando listas
const minhaLista = [] // Lista vazia
// ou
const minhaListaDeTarefas = [
    "Mandar Email", // Item 0
    "Colocar comida para a gata", // Item 1
    "Lavar a louça" // Item 2
] // Lista com conteúdo
console.log("Minha Lista de Tarefas:", minhaListaDeTarefas) // Mostra os itens da lista
// 2-Mexendo com os itens
console.log("\n--- Mexendo Com os Itens ---\n") // Separador
console.log("Item 0:",minhaListaDeTarefas[0]) // Lista item 0
console.log("Item 1:",minhaListaDeTarefas[1]) // Lista item 1
console.log("Item 1:",minhaListaDeTarefas[2]) // Lista item 2
console.log("Item 3:",minhaListaDeTarefas[3]) // Lista item 3 (não existe = undefined)
console.log("Quantos itens tem na lista:",minhaListaDeTarefas.length, minhaListaDeTarefas) // Conta quantos itens tem na lista
minhaListaDeTarefas.push("Formatar PC") // Adiciona novo item à lista
console.log("Quantos itens tem na lista agora:", minhaListaDeTarefas.length, minhaListaDeTarefas) // Conta quantos itens tem na lista agora e mostra eles
const ultimo = minhaListaDeTarefas.pop() // Seleciona o ultimo item da lista
console.log("Último item (removido):", ultimo) // Remove o ultimo item da lista e mostra ele
console.log("Itens restantes:", minhaListaDeTarefas) // Mostra os itens restantes
const primeiro = minhaListaDeTarefas.shift() // Seleciona o primeiro item da lista
console.log("Primeiro item (removido):", primeiro) // Remove o primeiro item da lista e mostra ele
console.log("Itens restantes:", minhaListaDeTarefas) // Mostra os itens restantes
minhaListaDeTarefas.splice(1,1) // Apaga, a partir do item 1, um item (apenas o item 1)
console.log("Item 1 removido. Itens restantes:", minhaListaDeTarefas) // Mostra o item restante

// 3-Ordenando itens
console.log("\n--- Ordenando Itens ---\n") // Separador
const itens = [
    1, "PC", 0.5
] // Cria lista "itens"
console.log("itens é array:", Array.isArray(itens)) // Verifica o tipo do Array
const numeros = [3,2,1,0] // Cria lista "números"
console.log("números ordenada:", numeros.sort()) // Ordena lista "números"
const letras = ["x","d","o","q","r"] // Cria lista "letras"
console.log("letras ordenada:", letras.sort()) // Ordena lista números

// 4-Juntando arrays
console.log("\n--- Juntando Arrays ---\n") // Separador
const novaLista = itens.concat(1, 2, 3) // Concatena 1, 2 e 3 à array "itens" criando a "novaLista"
console.log("Nova Lista:", novaLista) // Mostra a "novaLista"
console.log("Nova Lista em string:", novaLista.join(", ")) // Junta o array "novaLista" em uma string e separa os itens com ", "
const index = novaLista.indexOf("PC") // Cria uma variavel indexada na lista do "PC"
console.log("Posição do PC:", index) // Mostra a posição do "PC" de acordo com o índice da lista
console.log("Qual o item 'index':", novaLista[index]) //  Mostra o item de acordo com o índice