
/*
let infoUsuario = {
    usuario: 'Jucicleison',
    nomeCompleto: 'Jucicleison da Silva Souza',
    grupo: 'alunos',
    senha: '123456789'
}*/

let usuario = 'Jucicleison', nome = 'Jucicleison da Silva de Souza', grupo = 'alunos', password = '123456789'

//Abreviando propriedades
let infoUsuario = {
    usuario, //usuario: usuario,  //(cria uma propriedade com o nome e o valor da variavel)
    nomeCompleto: nome,
    grupo, //grupo: grupo,
    senha: password
}

console.log(infoUsuario)

//Exibindo o conteúdo da variável 'password' para fins de depuração.
console.log({password}, {grupo}) //cria um objeto, com uma unica propriedade e exibe propriedade e valor.

