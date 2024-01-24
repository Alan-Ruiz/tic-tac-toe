import { useState } from 'react';

const gameInitialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard() {
  const [board, setBoard] = useState(gameInitialBoard);

  function handleSelectSquare(rowIndex, cellIndex) {
    setBoard((prevboard) => {
      const newBoard = [...prevboard.map((innerArray) => [...innerArray])];
      newBoard[rowIndex][cellIndex] = "X";
      return newBoard;
    })
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => { 
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => {
              <li key={cellIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, cellIndex)}>{playerSymbol}</button>
              </li>
            })}
          </ol>
        </li> 
      })}
    </ol>
  )
};