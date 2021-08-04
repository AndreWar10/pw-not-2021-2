let nome = 'jucicleison', idade = 19, cidade = 'Franca/SP'
console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.')

//Usando string template
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)

//string template aceita dentro das chaves qualquer comando válido em JS
console.log(`Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)

