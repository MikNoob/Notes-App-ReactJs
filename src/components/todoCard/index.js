import React from 'react'
import PropTypes from 'prop-types'
import {FaCheck, FaEdit, FaTimes, FaUndo} from 'react-icons/fa'
import {connect} from 'react-redux'
import {checkTodo, uncheckTodo} from './actions'
import {deleteTodo} from '../../redux/publicActions'
import './style.css'

let TodoCard = ({id, name, checked, dispatch}) => {
    let handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    let handleCheck = () => {
        dispatch(checkTodo(id))
    }

    let handleUncheck = () => {
        dispatch(uncheckTodo(id))
    }

    return (
        <div className='TodoCard--Container'>
            <span className={checked === true ? 'Checked' : null} >{name}</span>

            <div className='TodoCard--Options'>
                {checked === true 
                ? <FaUndo className='TodoCard--UndoOp' size={25} onClick={handleUncheck} />
                : <FaCheck className='TodoCard--CheckOp' size={30} onClick={handleCheck} />
                }
                <FaEdit className='TodoCard--EditOp' size={30} />
                <FaTimes className='TodoCard--DeleteOp' size={30} onClick={handleDelete} />
            </div>
        </div>
    )
}

TodoCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

//delTodo: PropTypes.func.isRequired
export default connect()(TodoCard)