const ID_CONTEUDO = "conteudo"
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3 col-sm-3 col-xs-3">
            <div class="card" style="width: 50%;margin-left:auto;margin-right:auto">
            <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br>
        </div>
        `
    }
    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(itens) {
        // Para cada item da lista, vai executar a função obterCodigoHtml
        // Ao final, vai concatenar tudo em uma única string
        // Muda de Array para String
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }    
}