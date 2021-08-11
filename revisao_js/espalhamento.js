let minimo = Math.min(15, 7, -8, 14, 0, 9, 18)
let maximo = Math.max(15, 7, -8, 14, 0, 9, 18)

console.log({minimo, maximo})

let numeros = [15, 7, -8, 14, 0, 9, 18]

//Usando sintaxe de espalhamento para transformar um vetor
//em elementos "soltos"
minimo = Math.min(...numeros)
maximo = Math.max(...numeros)

console.log({minimo, maximo})

let carro1 = {
    marca: 'chevrolet',
    modelo: 'Opala',
    ano: 1983,
    cor: 'verde'
}

//Criando o objeto carro2 a partir de carro1

//let carro2 = carro1 //referencia ao mesmo objeto=> carro1 passa a se chamar carro2 também (um unico objeto ainda)

let carro2 = {...carro1}    //pra vetor da mesma forma

carro2.modelo = 'Chevette'
carro2.cor = 'bege'

console.log(carro1)
console.log(carro2)

let soma1 = somaTudo(12, 1, 6, 11, 4, 2, 10, 3, 5, 13, 5)
let soma2 = somaTudo(121, 103, 144, 153)

//A sintaxe de espalhamento também é usada para receber um 
//numero arbitrário de argumentos dentro de um unico parâmetro.
//Dentro da função, esse parâmetro se comporta como um vetor.
//Esse argumento especial recebe o nome de ARGUMENTO DE RESTO

function somaTudo(...nums) {   //pega todos numeros passados e coloca no argumento nums (tradado como vetor)
    let res = 0
    for(let n of nums) res += n
    return res
}

console.log({soma1, soma2})

let resultado1 = calcular('+', 10, 20, 30, 40, 50)
let resultado2 = calcular('*', 10, 20, 30, 40, 50)

//assinatura de função ~> representada pela qtde e tipo de seus argumentos e pelo tipo do seu valor de retorno

function calcular(oper, ...nums) {
    let res
    switch(oper) {
        case '+':
            res = 0
            for(let i of nums) res += i
            break
        case '*':
            res = 1
            for(let i of nums) res *= i
    }
    return res
}

console.log({resultado1, resultado2})

let legumes = ['batata', 'cenoura', 'abobrinha']
let frutas = ['maçã', 'banana', 'laranja', 'pera']
let hortifruti = [...legumes, ...frutas]

console.log({hortifruti})

//ordem alfabética
hortifruti.sort((a, b) =>  {
    if(a == b) return 0
    else if (a > b) return 1
    else return -1
})

console.log({hortifruti})