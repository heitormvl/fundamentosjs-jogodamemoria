const { tsNumberKeyword } = require("@babel/types")

// Enquanto não mudar, não para!
let termoDeParada = true
let termoDeParada1 = true
let contador1 = 0
let contador = 0
console.log("\n- Números ímpares -\n")
while(termoDeParada) {
    termoDeParada = contador < 10
    if(contador % 2 === 1) {
        console.log("Número impar", contador)
    }
    contador +=1 
    //contador = contador + 1 
}
console.log("\n- Números pares -\n")
while(termoDeParada1) {
    termoDeParada1 = contador1 < 10
    if(contador1 % 2 === 0) {
        console.log("Número par", contador1)
    }
    contador1 +=1 
    //contador1 = contador1 + 1 
}

// Roda a primeira vez e testa a variável depois!
do {
    console.log("Só uma vez! Pois termoDeParada é", termoDeParada)
} while(termoDeParada)