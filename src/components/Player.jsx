import { useState } from 'react';
export default function Player({name, symbol}) {
  const [ theName, setTheName] = useState(name)
  const [ isEditing, setIsEditing ] = useState(false)

  
  function handleEditClick() {
    setIsEditing((editing) => !editing)
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
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}