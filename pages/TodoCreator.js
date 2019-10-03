import { useState } from 'react'

export const TodoCreator = ({ addNewTodo }) => {
  const [newItem, setNewItem] = useState('')
  const getNewItemFromChangeEvent = e => {
    setNewItem(e.target.value)
  }

  const addButtonClicked = () => {
    addNewTodo(newItem)
    setNewItem('')
  }

  return (
    <div>
      <input value={newItem} onChange={getNewItemFromChangeEvent} />
      <button onClick={addButtonClicked}>Add me</button>
    </div>
  )
}
