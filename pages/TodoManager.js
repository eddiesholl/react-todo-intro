import { useState } from 'react'

import { TodoList } from "./TodoList"

export const TodoManager = () => {
  const [todos, setTodos] = useState(['Remember the milk', 'Something else'])

  return (
    <TodoList todos={todos} />
  )
}
