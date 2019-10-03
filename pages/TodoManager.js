import { useState } from 'react'

import { TodoList } from "./TodoList"
import { TodoCreator } from './TodoCreator'
import { TodoCounter } from './TodoCounter'

export const TodoManager = () => {
  const [todos, setTodos] = useState(['Remember the milk', 'Something else'])
  const addNewTodo = newTodo => {
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <TodoCounter todos={todos} />
      <TodoList todos={todos} />
      <TodoCreator addNewTodo={addNewTodo} />
    </div>
  )
}
