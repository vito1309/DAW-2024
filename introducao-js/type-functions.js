// função sem retorno (procedure)
function inicio() {
    const mensagem = 'Estou iniciando...'

    console.log(mensagem)
}

// função com retorno (function)
function processa(){
    const mensagem = 'Estou processando...'
    return mensagem
}

function run(){
    inicio();
    
    const resultado = processa()

    console.log (resultado)
}

run();