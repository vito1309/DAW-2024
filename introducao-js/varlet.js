const exibeMensagemVar = () => {
    var msgForaIF = 'Brasil'

    if (true) {
        var msgDentroIF = 'Argentina'
        console.log(msgDentroIF)

    }

    console.log('1 ', msgForaIF)
    console.log('2 ', msgDentroIF)
}

const exibeMensagemLet = () => {
    let mensagemForaIf = 'Brasil'

    if (true) {
        let mensagemDentroIF = 'Argentina'
        console.log(mensagemForaIf)
    }

    console.log('1 ', mensagemForaIf)
    console.log('2 ', mensagemDentroIF)
}   