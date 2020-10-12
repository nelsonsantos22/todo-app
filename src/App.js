import React, { Component } from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {

  constructor(){
    super()
    this.state = {
      todos : todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{ 
        todos : updatedTodos
      }
    })
  }

  render () {
    const task = this.state.todos.map(item => <TodoItem key= {item.id} info = {item} handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
        {task}
      </div>
    )
  }
  
}

export default App