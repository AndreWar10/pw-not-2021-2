const frutas = ['banana', 'maçã', 'uva', 'pera', 'mamão', 'morango', 'laranja']

//Gere um noo vetor que contenha todos os elementtos do vetor
// frutas, mas em MAIÚSULAS

let frutas2 = []

for(let f of frutas) {
    frutas2.push(f.toUpperCase())
}

console.log(frutas2)

let frutas3 = frutas.map(elemento => elemento.toUpperCase())
console.log(frutas3)

/*
map() gera um novo vetor cujos elementos são resultado da aplicação de uma função
(passada a ele como parametro) sobre cada um dos elementos do vetor original.

O tamanho do novo vetor gerado é SEMPRE IGUAL ao tamanho do vetor 
original (correspondência 1:1).
*/

//Gerar um novo vetor que contenha os numeros elevados ao quadrado
let nums = [2, 3, 4, 5, 6, 7, 8, 9]

let quadrados = nums.map(n => n ** 2)
console.log(quadrados)