import React from 'react'
import PropTypes from 'prop-types'
import TodoCard from '../../todoCard'
import {connect} from 'react-redux'
import {FaAngleDown} from 'react-icons/fa'

let UncheckedTodoList = ({todos}) => {
    return (
        <div className='UncheckedTodos--Container'>
            <div className='UncheckedTodos--Title'>
                <FaAngleDown size={30} />
                <span>Unchecked Todos</span>
            </div>
    
            <div className='UncheckedTodos--List'>
                <ul>
                    {todos.map(todo => (<TodoCard key={todo.id} {...todo} />))}        
                </ul>
            </div>
        </div>
    )
}

UncheckedTodoList.propTypes = {
    todos: PropTypes.array.isRequired,
}

//dispatch: PropTypes.func.isRequired
export default connect(state => ({todos: state.UncheckedTodos}))(UncheckedTodoList)
