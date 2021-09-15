//import, link e rota no App.js
/*
import * as React from 'react'

export default function Exercicio02({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(initialName)
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}*/

import * as React from 'react'

export default function Exercicio02({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(
      //Recuperação de um valor previamente salvo no localStorage
      //ou usa o valor de initialName, caso o item localStorage não exista
      
      // Retornando uma função para criar um lazy initializer , que é executado
      // apenas uma vez, no carregamento inicial da pagina
      () => readStorage() || initialName
  )
  const [count, setCount] = React.useState(() => 0)

  function readStorage() {
      console.count('Lido localStorage')
      return window.localStorage.getItem('name')
  }
  
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  //Armazenando em um item do localStorage chamado "name" o valor 
  //da variavel de etado name
  React.useEffect(() => {
    window.localStorage.setItem('name', name) //sempre passa função, preferencia arrowF  
    setCount(count + 1)
  }, [name]) //vigiando apenas 'name'

  // useEffect() tem dois parâmetros:
  // 1) É uma função que será atualizada depois de uma atualização do componente
  // 2) Vetor de dependencias: qual ou quais as variaveis de estado que serão 
  //    monitoradas para a execução do useEffect() 

  function handleChange(event) {
    //Atualização da variavel de estado "name" vai desencadear uma atualizacao
    //do componente. Após a atualização ter sido processada será executado o useEffect().  
    setName(event.target.value)
    
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <div>Quantidade de atualizações: {count}</div>
    </div>
  )
}