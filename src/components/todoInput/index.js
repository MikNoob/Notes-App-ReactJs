import React, {useState} from 'react'
import {FaPlus} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Crypto from 'crypto'
import './style.css'

let TodoInput = ({addTodo}) => {
    let [todo, setTodo] = useState('')

    let handleTodo = e => {    
        setTodo(todo = e.target.value)
    }

    let createTodoObj = todoName => ({id: Crypto.randomBytes(10).toString('hex'), name: todoName})

    let handleSubmit = e => {
        //e.key is for input
        //e.type is for clicking the addButton
        if(e.key === 'Enter' || e.type === 'click') {
            addTodo(createTodoObj(todo))
            setTodo(todo = '')
        }
    }

    return(
        <div className='TodoInput--Container'>
            <input
                type='text'
                placeholder='Todo here'
                value={todo}
                onChange={handleTodo}
                onKeyPress={handleSubmit}
            />
            <FaPlus onClick={handleSubmit} size={32} />
        </div>
    )
}

TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default TodoInput