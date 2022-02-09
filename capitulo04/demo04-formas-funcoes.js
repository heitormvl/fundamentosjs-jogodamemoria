function minhaFuncao1(parametro1) {
    return `aaa ${parametro1}`
}

const minhaFuncao2 = function(parametro1) {
    return `aaa ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
    return `aaa ${parametro1}`
}

const minhaFuncao4 = parametro1 => `aaa ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `aaa ${parametro1}`
}

obj1.minhaFuncao("teste")

const obj2 = {
    minhaFuncao (parametro1) {
        return `aaa ${parametro1}`
    }
}