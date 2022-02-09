let salarioDoAmigo = 1000
let meuSalario = "2999.14"
let meuSalarioCorrigido = Number(meuSalario)

console.log(
    "Tipo do salário do amigo: ",
    typeof(salarioDoAmigo),
    "/ Valor do salário do amigo: ",
    salarioDoAmigo
)
console.log(
    "Tipo do meu salário: ",
    typeof(meuSalario),
    "/ Valor do meu salário: ",
    meuSalario
)
console.log(
    "Meu Salário é NaN? ",
    isNaN(meuSalario)
)

console.log(
    "Soma dos salários: ",
    salarioDoAmigo + meuSalarioCorrigido
)

let minhaString = "Olá Mundo!"
let minhaString2 = "Olá Mundo2!"
let minhaStringComVariaveis = 
`${minhaString} - ${minhaString2}`

console.log(minhaStringComVariaveis)