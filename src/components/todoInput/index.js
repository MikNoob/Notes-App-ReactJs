import React, {useState} from 'react'
import {FaPlus} from 'react-icons/fa'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AddTodo from './actions'
import './style.css'

let TodoInput = ({dispatch}) => {
    let [todo, setTodo] = useState('')

    let handleTodo = e => {    
        setTodo(todo = e.target.value)
    }

    let handleSubmit = e => {
        if(e.key === 'Enter' || e.type === 'click') {
            if(todo.length >= 5) {
                dispatch(AddTodo(todo))
                setTodo(todo = '')
            } else
                alert('The todo needs to have at least 5 characters')
        }
    }

    return(
        <div className='TodoInput--Container'>
            <input
                type='text'
                placeholder='Create a new todo'
                value={todo}
                onChange={handleTodo}
                onKeyPress={handleSubmit}
            />
            <FaPlus onClick={handleSubmit} size={32} />
        </div>
    )
}

TodoInput.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(TodoInput)