import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

import TodoCard from './todoCard'

let TodoList = ({data, todosFunc}) => (
    <div className='TodoList--Container'>
        {data.map(todo => <TodoCard key={todo.id} {...todo} {...todosFunc} />)}
    </div>
)

TodoList.propTypes = {
    data: PropTypes.array.isRequired,
    todosFunc: PropTypes.object.isRequired
}

export default TodoList