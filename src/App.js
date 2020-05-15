import React, {Component} from 'react';
import './style.css';

import TodoInput from './components/todoInput'
import TodoList from './components/todoList'

class App extends Component {
  state = {
    todos: []
  }

  addTodo = todoObj => {
    let todosArray = this.state.todos
    todosArray.push(todoObj)
    this.setState({todos: todosArray})
  }

  deleteTodo = todoKey => {
    let {todos} = this.state
    let filteredTodos = todos.filter(todo => todo.id === todoKey ? false : true)
    this.setState({todos: filteredTodos})
  }

  render() {
    let {todos} = this.state

    return(
      <div className='App--Container'>
        <TodoInput addTodo={this.addTodo} />
        <TodoList data={todos} todosFunc={{delTodo: this.deleteTodo}}/>
      </div>
    )
  }
}

export default App