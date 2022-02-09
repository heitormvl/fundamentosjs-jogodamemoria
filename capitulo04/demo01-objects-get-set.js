// Criando objeto
const pessoa = { // Cria o objeto "pessoa"
    _nome: '', // Define "nome" como vazio
    _idade: 20, // Define "idade" como "20"
    get nome () { // Ao tentar acessar "nome":
        return this._nome // Retornar o valor de "_nome"
    },
    set nome(valor) { // Ao tentar definir "nome":
        this._nome = valor.toUpperCase() // Alterar "_nome" com o valor de "nome" em caixa alta
    },
    get podeDirigir() { // Ao tentar acessar "podeDirigir":
        return this._idade > 18 // Retornar se "_idade" é maior que 18
    },
    set idade(valor) { // Ao tentar definir "idade":
        this._idade = valor // Define o valor de "idade" em "_idade"
    }
}

pessoa.nome = "maria do ceu"
console.log(pessoa.nome)
pessoa.idade = 16
console.log(pessoa.podeDirigir)
pessoa.idade = 19
console.log(pessoa.podeDirigir)