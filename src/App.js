import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'

function App() {

  const task = todosData.map(item => <TodoItem key= {item.id} info = {item} />)

  return (
    <div className="todo-list">
      {task}
    </div>
  )
}

export default App