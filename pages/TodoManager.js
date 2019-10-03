import { useState } from 'react'

import { TodoList } from "./TodoList"
import { TodoCreator } from './TodoCreator'

export const TodoManager = () => {
  const [todos, setTodos] = useState(['Remember the milk', 'Something else'])

  return (
    <div>
      <TodoList todos={todos} />
      <TodoCreator />
    </div>
  )
}
