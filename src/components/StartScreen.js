import React from 'react'
const StartScreen = ({startGame}) => {
  return (
    <div className='start' >
        <h1>Secret Word</h1>
        <p>Clique aqui para iniciar:</p>
        <button onClick={startGame} >Começar o jogo</button>
    </div>
  )
}

export default StartScreen;