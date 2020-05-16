import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {FaCheck, FaEdit, FaTimes, FaUndo} from 'react-icons/fa'
import {connect} from 'react-redux'
import {checkTodo, uncheckTodo, editTodo} from './actions'
import {deleteTodo} from '../../redux/publicActions'
import './style.css'

let TodoCard = ({id, name, checked, dispatch}) => {
    let [isEditing, setIsEditing] = useState(false)
    let [editedName, setEditedName] = useState(name)

    let handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    let handleCheck = () => {
        dispatch(checkTodo(id))
    }

    let handleUncheck = () => {
        dispatch(uncheckTodo(id))
    }

    let toggleEditingMode = () => {
        if(isEditing)
            setIsEditing(isEditing = false)
        else
            setIsEditing(isEditing = true)
    }

    let handleEdit = e => {
        let {value} = e.target
        setEditedName(editedName = value)
    }

    let handleSubmit = e => {
        if(e.key === 'Enter') {
            dispatch(editTodo(id, editedName))
            toggleEditingMode()
        }
    }

    return (
        <div className='TodoCard--Container'>
            {isEditing 
            ? <input className='TodoCard--Input' value={editedName} onChange={handleEdit} onKeyPress={handleSubmit} autoFocus/> 
            : <span className={checked ? 'Checked' : null} >{name}</span>
            }

            <div className='TodoCard--Options'>
                {checked === true 
                ? <FaUndo className='TodoCard--UndoOp' size={25} onClick={handleUncheck}/>
                : <FaCheck className='TodoCard--CheckOp' size={30} onClick={handleCheck}/>
                }
                <FaEdit className='TodoCard--EditOp' size={30} onClick={toggleEditingMode}/>
                <FaTimes className='TodoCard--DeleteOp' size={30} onClick={handleDelete}/>
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