// Exemplo
function nomeDaFuncao(parametro1) {
     //bloco de código
}
// Exemplo

function queDiaEHoje() { // Cria a função "queDiaEHoje"
    const data = new Date() // Cria a variável "data" e define para hoje
    console.log(`Hoje é dia ${data.getDate()}`) // Exibe "data"
}
queDiaEHoje() // Executa a função

function soma(valor1, valor2) { // Cria a função "soma"
    console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2) // Exibe o resultado da soma do valor1 e valor2
}
soma(10, 20) // Executa a função
soma(105.2, 204.8) // Executa a função

// Retornando valores com funções
function novaSoma(valor1, valor2) { // Cria a função "novaSoma"
    return valor1 + valor2 // Retorna o valor da soma
}
const idade = 20 // Cria a variável "idade"
const tamanho = 10 // Cria a variável "tamanho"
const resultado = novaSoma(idade, tamanho) // Cria a variável "resultado" com o resultado da "novaSoma" entre "idade" e "tamanho"
console.log("Resultado Idade + Tamanho:", resultado) // Mostra o resultado

// Cálculo de salário
console.log("\n--- Cálculo de salário ---\n") // Separador

const funcionario1 = { // Cria o objeto "funcionario1"
    nome: "Álvaro",
    desconto: 0.1,
    salarioBruto: 10000,
    salarioLiquido: 0,
}

const funcionario2 = { // Cria o objeto "funcionario2"
    nome: "Heitor",
    desconto: 0.05,
    salarioBruto: 10000,
    salarioLiquido: 0
}

const funcionario3 = { // Cria o objeto "funcionario1"
    nome: "Helopop",
    desconto: 0.2,
    salarioBruto: 8000,
    salarioLiquido: 0,
}

function calcularSalarioLiquido(salarioBruto, desconto) { // Cria a função "calculaSalarioLiquido"
    return salarioBruto - (salarioBruto * desconto) // Retorna o valor do "salarioBruto" - desconto
}

funcionario1.salarioLiquido = calcularSalarioLiquido( // Usa a função "calcularSalarioLiquido" no "funcionario1"
    funcionario1.salarioBruto, // Usa o valor "salarioBruto" do "funcionario1" na função
    funcionario1.desconto // Usa o valor "desconto" do "funcionario1" na função
)

funcionario2.salarioLiquido = calcularSalarioLiquido( // Usa a função "calcularSalarioLiquido" no "funcionario2"
    funcionario2.salarioBruto, // Usa o valor "salarioBruto" do "funcionario2" na função
    funcionario2.desconto // Usa o valor "desconto" do "funcionario2" na função
)

funcionario3.salarioLiquido = calcularSalarioLiquido( // Usa a função "calcularSalarioLiquido" no "funcionario3"
    funcionario3.salarioBruto, // Usa o valor "salarioBruto" do "funcionario3" na função
    funcionario3.desconto // Usa o valor "desconto" do "funcionario3" na função
)

console.log(
    `
    Salário Líquido de ${funcionario1.nome}: R$ ${funcionario1.salarioLiquido}
    Salário Líquido de ${funcionario2.nome}: R$ ${funcionario2.salarioLiquido}
    Salário Líquido de ${funcionario3.nome}: R$ ${funcionario3.salarioLiquido}
    `    
) // Exibe o salário líquido do "funcionário1" e "funcionario2"