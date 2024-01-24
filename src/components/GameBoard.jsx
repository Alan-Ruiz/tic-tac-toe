import { useState } from 'react';

const gameInitialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns}) {
  let gameBoard = gameInitialBoard;

  for (const turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  // const [board, setBoard] = useState(gameInitialBoard);

  // function handleSelectSquare(rowIndex, cellIndex) {
  //   setBoard((prevboard) => {
  //     const newBoard = [...prevboard.map((innerArray) => [...innerArray])];
  //     newBoard[rowIndex][cellIndex] = activeplayerSymbol;
  //     return newBoard;
  //   })

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => onSelectSquare(rowIndex, cellIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li> 
      ))}
    </ol>
  )
};