import React, { Component } from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {

  constructor(){
    super()
    this.state = {
      todos : todosData
    }
  }

  render () {
    const task = this.state.todos.map(item => <TodoItem key= {item.id} info = {item} />)

    return (
      <div className="todo-list">
        {task}
      </div>
    )
  }
  
}

export default App