import * as React from 'react'
// "*" => tudo que que é react no react

export default function Teste2() {

    const [caption, setCaption] = React.useState('Clique aqui')

    const handleButtonClick = event => setCaption('Botão clicado')

    return(
        <button onClick={handleButtonClick}>{caption}</button>
    
    )
}