export default function GameOver({winner}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner}!</p>}
      {!winner && <p>It's a DRAW!</p>}
      <button>Rematch!</button>
    </div>
  )
}