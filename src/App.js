import React, {Component} from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  handleChange = (id) => {
   console.log('Changed!', id)
   this.setState(prevState => {
     const updatedTodos = prevState.todos.map(todo => {
       if (todo.id === id) {
         todo.completed = !todo.completed
       }

       return todo
     })
     return {
       todos: updatedTodos
     }
   })
  }

  render() {
    const todoItemComponents = this.state.todos.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todoItemComponents}
      </div>
    )
  }

  
}

export default App