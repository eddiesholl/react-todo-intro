const items = ['Remember the milk', 'Something else']

export const TodoList = () => {
  return (
    <ol>
      { items.map((item, ix) => <li key={ix}>{item}</li>) }
    </ol>
  )
}
