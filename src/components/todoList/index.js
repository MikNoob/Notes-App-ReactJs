import React from 'react'
import './style.css'

import CheckedTodosList from './checkedTodosList'
import UncheckedTodosList from './uncheckedTodosList'

let TodoList = () => (
        <div className='TodoList--Container'>
            <UncheckedTodosList />
            <CheckedTodosList />
        </div>
)
//{data.map(todo => <TodoCard key={todo.id} {...todo} {...todosFunc} />)}

export default TodoList