export default function GameOver({winner, onRestart}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} WON!</p>}
      {!winner && <p>It's a DRAW!</p>}
      <button onClick={onRestart}>Rematch!</button>
    </div>
  )
}