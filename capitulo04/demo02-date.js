// Meses começam do 0 (0-11)
console.log("\n--- Nova Data: 23/01/2022 ---\n") // Objetivo
const dataAniversario = new Date(2022, 0, 23) // Cria "dataAniversario" e define para 23/01/2022
console.log("Data de Aniversário:", dataAniversario) // Mostra "dataAniversario"

console.log("\n--- Primeira data ---\n") // Objetivo
const primeiraData = new Date(0) // Cria "primeiraData" e define para o ínicio da data do JS
console.log("Primeira data:", primeiraData, "\nPrimeira data em número absoluto:", primeiraData.getTime()) // Mostra "primeiraData" em data e número absoluto

console.log("\n--- Nova Data: Hoje ---\n") // Objetivo
const hoje = new Date() // Cria "hoje" e define para a data atual
console.log("Data de hoje:", hoje, "\nData de hoje em número absoluto:", hoje.getTime()) // Mostra "hoje"
console.log("Hoje no formato local:",hoje.toLocaleDateString()) // Converte a data no formato local da máquina
console.log("Hoje no formato ISO:", hoje.toISOString())

console.log("\n--- Nova Data: Hoje + 5 dias ---\n") // Objetivo
const dia = hoje.getDate() // Define "dia" como "hoje"
hoje.setDate(dia + 5) // Adiciona 5 dias no "hoje"
hoje.setHours(10, 30, 00)
console.log("Data Teórica:", hoje) // Mostra o "hoje" modificado
console.log(`
    DIA: ${hoje.getDate()}
    MÊS: ${hoje.getMonth()}
    ANO: ${hoje.getFullYear()}
    HORA: ${hoje.getHours()}
    MINUTO: ${hoje.getMinutes()}
`)

console.log("\n--- Comparação ---\n") // Objetivo
console.log("20/01/2020 é maior que 20/01/2000?", new Date(2020, 1, 20) > new Date( 2000, 1, 20))