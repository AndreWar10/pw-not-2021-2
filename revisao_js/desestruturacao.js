// Criando um Vetor
let carros = ['Celta', 'Uno', 'Gol']

//Desestruturação total do vetor
let [a, b, c] = carros
console.log(a)
console.log(b)
console.log(c)
console.log('----------------')

//Desestruturação parcial
let [m, n] = carros
console.log(m) //'Celta'
console.log(n) //'Uno'
console.log('----------------')

let [x, ,z] = carros //Pulando o do meio (Uno)
console.log(x)  //'Celta'
console.log(z)  //'Gol'
console.log('----------------')


//Criando um Objeto
let veiculo = {
    marca: 'Volkswagen',
    modelo: 'fusca',
    cor: 'preto',
    ano: 1969
}

//Desestruturação total de um objeto
//1º regra: as variáveis devem ter o mesmo nome das propriedades
//2º regra: a ordem não importa

let {cor, modelo, ano, marca} = veiculo
console.log(cor)
console.log(ano)

