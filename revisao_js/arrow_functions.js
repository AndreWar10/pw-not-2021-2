//EXEMPLO 1 =~>

//Função tradicional com 1 parametro e 1 linha de código no corpo, com return
function quadrado(x) {
    return x *x 
}


//Arrow function equivalente
/*
1) A função deve ser atribuída a uma variável (ou melhor, a uma constante)
2) Desaparece a palavra-chave 'function'
3) Desaparecem os parenteses em torno do paramentro 
4) Após o parametro, aparece o simbolo => (flecha, arrow)
5) Desaparecem as chaves em torno do corpo da função
6) Desaparece a palavra-chave 'return'
*/
const quadrado2 = x => x *x 

console.log(quadrado(9))
console.log(quadrado2(9))

console.log('-------------------------- -------------------------------')


//EXEMPLO 2 =~>

// Função tradicional com 2 argumentos, 1 linha de corpo com return
function potencia(base, expoente) {
    return base ** expoente
}

//Arrow function correspondente
//Retornam os parenteses em torno dos argumentos
const potencia2 = (base, expoente) => base ** expoente

console.log(potencia(3, 5))
console.log(potencia2(3, 5))

console.log('-------------------------- -------------------------------')


//EXEMPLO 3 =~> Função tradicional sem parâmetros, 1 linha de corpo com return
function horaAtual() {
    return new Date()
}

//Arrow function correspondente
//Os parenteses vazios marcam a posição do argumento
const horaAtual2 = () => new Date()

console.log(horaAtual().toLocaleString("pt-br", {timeZone:'America/Sao_Paulo' }))   //Converter para o horário Brasil
console.log(horaAtual2().toLocaleString("pt-br", {timeZone: 'America/Sao_Paulo'}))

console.log('-------------------------- -------------------------------')


//EXEMPLO 4 =~> Função tradicional com 1 parametro e multplas linhas de corpo
function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

//Arrow function correspondente
//Retornam as chaves do corpo da função
const fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

//Arrow com op ternário
const fatorial3 = n => (n <= 1 ? 1: n * fatorial3(n - 1))

console.log(fatorial(5))
console.log(fatorial2(5))
console.log(fatorial3(5))