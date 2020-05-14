import React, {useState} from 'react';
import './style.css';

import TodoInput from './components/todoInput'
import TodoList from './components/todoList'

let App = () => {
  let [todos, setTodos] = useState([])

  let addTodo = todoObj => {
    let todosArray = todos
    todosArray.push(todoObj)
    setTodos(todos = todosArray)
  }

  return(
    <div className='App--Container'>
      <TodoInput addTodo={addTodo} />
      <TodoList data={todos} />
    </div>
  )
}

export default App