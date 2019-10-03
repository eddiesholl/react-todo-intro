export const TodoList = ({ todos }) => {
  return (
    <ol>
      { todos.map((item, ix) => <li key={ix}>{item}</li>) }
    </ol>
  )
}
