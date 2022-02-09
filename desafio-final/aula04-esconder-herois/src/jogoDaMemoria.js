class JogoDaMemoria {
    // 3o importar a tela como dependencia
    // iria funcionar sem importar chamando a variavel Tela global
    // mas não é uma boa prática, a melhor prática é obter esse valor por dependencia
    // depois usar a partir do this
    
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            // relativo ao index.html pois será carregado lá
            { img: './arquivos/batman.png', nome: 'batman'},
            { img: './arquivos/greenlantern.png', nome: 'greenlantern'},
            { img: './arquivos/superman.png', nome: 'superman'},
            { img: './arquivos/flash.png', nome: 'flash'},
        ]
        this.iconePadrao = './arquivos/question.png'
        this.heroisEscondidos = []
    }

    // 1o -para usar o this, nao podemos usar o static
    inicializar() {
        // 2o - vamos precisar importar a tela para fazer alterações nela
        // 3o - chamar a funcao de tela apara atualizar as imagens
        this.tela.atualizarImagens(this.heroisIniciais)
        // 4o - forçar a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar() {
        const copias = this.heroisIniciais
        // Duplicar os itens
        .concat(this.heroisIniciais)
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        // Ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        // Vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000)
    }
    esconderHerois(herois) {
        // Vamos trocar a imagem de todos os herois existentes pelo icone padrão
        // Como fizemos no construtor, vamos extrair somente o necessário
        // Usando a sintaxe ({chave:1}) estamos falando que vamos retornar o que tiver dentro dos parenteses
        // Quando não usamos : (exemplo do id), o JS entende que o nome é o mesmo do valor. Ex.: id: id, vira id
        const heroisOcultos = herois.map(({nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // Atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // Guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }
    jogar() {
        this.embaralhar()
    }
}