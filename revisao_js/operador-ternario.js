let nota = 7.3
let situacao

/*
if(nota >=6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}*/

//Usando o operador ternario
//condicao ? 
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(`Nota ${nota}, situação: ${situacao}`)

let user = 'admin'

//Se user for 'admin', Pode logar, senão não pode logar
let msg = user === 'admin' ? 'Pode logar' : 'Não pode logar'

console.log(msg)