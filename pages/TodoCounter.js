import PropTypes from 'prop-types'

export const TodoCounter = ({ todos }) => {
  return (
    <div>
      There are currently {todos.length} things to remember
    </div>
  )
}

TodoCounter.propTypes = {
  todos: PropTypes.array.isRequired
}
