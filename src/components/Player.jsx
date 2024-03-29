import { useState } from 'react';
export default function Player({name, symbol, isActive, onChangeName}) {
  const [ theName, setTheName] = useState(name)
  const [ isEditing, setIsEditing ] = useState(false)

  
  function handleEditClick() {
    setIsEditing((editing) => !editing)
    if (isEditing) {
      onChangeName(symbol, theName) 
    }
  }

  function handleNameChange(event) {
    console.log(event.target.value)
    setTheName(event.target.value)
  }

  let playerName = <span className="player-name">{theName}</span>

  if (isEditing) {
    playerName = <input type="text" required value={theName} onChange={handleNameChange}/>
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}