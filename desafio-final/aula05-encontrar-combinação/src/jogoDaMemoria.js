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
        this.heroisSelecionados = []
    }

    // 1o -para usar o this, nao podemos usar o static
    inicializar() {
        // 2o - vamos precisar importar a tela para fazer alterações nela
        // 3o - chamar a funcao de tela apara atualizar as imagens
        this.tela.atualizarImagens(this.heroisIniciais)
        // 4o - forçar a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
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
    verificarSelecao(id, nome) {
        const item = {id, nome}
        // Vamos verificar a quantidade de herois selecionados e tomar ação se deu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                // Adiciona a escolha na lista, esperando pela próxima clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // Se a quantidade de escolhidos for 1, significa que o usuário só pode escolher mais um
                // Vamos obert o primeiro da lista
                const [opcao1] = this.heroisSelecionados
                // Zerar itens para não selecionar mais de 2
                this.heroisSelecionados = []
                // Conferimos se os nomes e ids batem conforme o esperado
                if(opcao1.nome === item.nome &&
                    // Aqui verificamos se são ids diferentes para o usuário não clicar duas no mesmo
                    opcao1.id !== item.id) {
                        alert("Combinação correta! " + item.nome)
                        // Para a execução
                        return;
                    }
                    alert('Combinação incorreta!')
                    // Fim do case
                    break;
        }
    }
    jogar() {
        this.embaralhar()
    }
}