import React from 'react'
import PropTypes from 'prop-types'
import {FaCheck, FaEdit, FaTimes} from 'react-icons/fa'
import './style.css'

let TodoCard = ({id, name, delTodo}) => {
    let handleDelete = () => {
        delTodo(id)
    }    

    return (
        <div className='TodoCard--Container'>
            <span>{name}</span>

            <div className='TodoCard--Options'>
                <FaCheck className='TodoCard--CheckOp' size={30} />
                <FaEdit className='TodoCard--EditOp' size={30} />
                <FaTimes className='TodoCard--DeleteOp' size={30} onClick={handleDelete} />
            </div>
        </div>
    )
}

TodoCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoCard