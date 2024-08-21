import './Jokenpo.css'
import { useState } from 'react';

function Joke() {
  const [showButton, setShowButton] = useState(false);  //Mostrar ou esconder botão
  const [playerChoice, setPlayerChoice] = useState(null); //Valores do Jogador
  const [machineChoice, setMachineChoice] = useState(null); //Valores da maquina
  const [playerScore, setPlayerScore] = useState(0);   //Pontuação do Jogador
  const [machineScore, setMachineScore] = useState(0); //Pontos da Maquina

    const EscolherImagens = {  //Salvar as imagnes com valores
      0: '../../../Img/Pedra.png',  //0
      1: '../../../Img/Mao.png',   //1
      2: '../../../Img/Tesoura.png' //2
    };


  const handlePlayerChoice = (choice) => { 
    setPlayerChoice(choice); //Atualiza estado Jogador
    const machineChoice = Math.floor(Math.random() * 3); // Faz a escolha da maquina entre um numero de 0 a 3 podendo ser pedra,papel e tesoura
    setMachineChoice(machineChoice); //Atualiza o estado da maquina 
    determineWinner(); //Determina que Venceu
  };

  const determineWinner = () => {  //Determinar o Ganhador
    if (playerChoice === machineChoice) {
      // Empate
     
    } else if ((playerChoice === 0 && machineChoice === 2) || (playerChoice === 1 && machineChoice === 0) || (playerChoice === 2 && machineChoice === 1)) {  // Faz a escolha de oque o jogador e a maquinma jogaram e indentica e faz a soma de que ganhou
      setPlayerScore(playerScore + 1); //+1 Jogador
      
      
    } else {
      setMachineScore(machineScore + 1); // +1 Maquina
     
    }
    if (playerScore >= 5 || machineScore >= 5) {  //Determinar o Numero necessario para vencer e mostar novamente o botão de rejogar
      setShowButton(true);
    }
  };

  const handlePlayAgain = () => { //Resetar os valores da Pontuação.
    setShowButton(false); //Esconder Botão
    setPlayerScore(0);   //Resetar Score
    setMachineScore(0);   //Resetar Score
    setPlayerChoice(null);   //Resetar escolha do jogador
    setMachineChoice(null);  //Resetar escolha da Maquina
   
  };

  return (
    <>
      <h1 id='a1'>Jokenpô</h1>
      <div className='a2'>
        <p>Jogador</p>
        <p>vs</p>
        <p>Computador</p>
      </div>
      <div className='a3'>
        <p id='Valor1'>{playerScore}</p>  {/* Placar do Jogador */}
        <p id='Valor2'>{machineScore}</p> {/* Placar da Maquina */}
      </div>
      <div className='a4'>
        <div>
          <span className={'a5'}>Pedra</span>
          <img src="../../../Img/Pedra.png" alt="" onClick={() => handlePlayerChoice(0)} />  {/* Escolher Pedra*/ }
        </div>
        <div>
          <span className={'a5'}>Papel</span>
          <img src="../../../Img/Mao.png" alt="" onClick={() => handlePlayerChoice(1)} />   {/* Escolher Papel*/ }
        </div>
        <div>
          <span className={'a5'}>Tesoura</span>
          <img src="../../../Img/Tesoura.png" alt="" onClick={() => handlePlayerChoice(2)} /> {/* Escolher Tesoura*/ }
        </div>
      </div>
      {showButton && (
        <div className="wrapper">
          <div className="j1">
            {playerScore >= 3 ? (
              <span id='e1'>Jogador Venceu!</span>
            ) : (
              <span id='e2'>Maquina Venceu!</span>
            )}
           <br></br> <button id='d1' onClick={handlePlayAgain}> {/*Jogar Novamnete*/}
              Jogar Novamente?
            </button>
          </div>
        </div>
      )}
      <div className="footer-container">  {/*Container para mostrar oque jogou*/}
        <div className="b2">
          <span>Jogador Escolheu:</span>
          {playerChoice !== null && (
            <div className="circule">
             <img src={EscolherImagens[playerChoice]} alt="" className='dd1' />  {/*Função para Pegar a imagens certa de qual foi jogada*/}
             </div>
          )}
        </div>
        <div className="b3">        {/*Container para mostrar oque jogou*/}
          <span>Máquina Escolheu:</span>
          {machineChoice !== null && (
            <div className="circule2">
             <img src={EscolherImagens[machineChoice]} alt="" className='dd1' />  {/*Função para Pegar a imagens certa de qual foi jogada*/}
             </div>
          )}
        </div>
      </div>
   
    </>
  );
}

export default Joke;