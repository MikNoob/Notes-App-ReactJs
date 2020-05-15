import React from 'react';
import {Provider} from 'react-redux'
import Store from './redux/store'
import './style.css';

import TodoInput from './components/todoInput'
import TodoList from './components/todoList'

let App = () => (
  <Provider store={Store} >
    <div className='App--Container'>
      <TodoInput />
      <TodoList />
    </div>
  </Provider>
)

export default App