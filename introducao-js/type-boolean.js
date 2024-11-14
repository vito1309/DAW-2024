const value1 = true
const value2 = false


console.log(value1 == value2)

// thrusty / falsy -> variáveis ou com valor 0, se submeter a um testo lógico, se tornarão um tipo boolean(thrusty / falsy)

// teste lógico

if (value1) {
    console.log('verdadeiro')
}else{
    console.log('Falso')
}

// operador ternário
const resultado = value1 ? 'verdadeiro' : 'falso'