import { useState } from 'react'
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import GameOver from './components/GameOver.jsx'
import { WINNING_COMBINATIONS } from './winning-combinations.js'


const gameInitialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let activePlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = gameInitialBoard;
  let winner;

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstCombination = gameBoard[combination[0].row][combination[0].column];
    const secondCombination = gameBoard[combination[1].row][combination[1].column];
    const thirdCombination = gameBoard[combination[2].row][combination[2].column];

    if (firstCombination && firstCombination === secondCombination && secondCombination === thirdCombination) {
      winner = firstCombination;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleActivePlayer(rowIndex, cellIndex) {
    setGameTurns((prevTurns) => {
      
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurns = [ 
        {square: {row: rowIndex, col: cellIndex}, player: currentPlayer},
         ...prevTurns
      ];
      return updateTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={ activePlayer === 'X'}/>
          <Player name="Player 2" symbol="O" isActive={ activePlayer === 'O'}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}/> }
        <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
