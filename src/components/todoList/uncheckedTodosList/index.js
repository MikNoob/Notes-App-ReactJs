import React from 'react'
import PropTypes from 'prop-types'
import TodoCard from '../../todoCard'
import {connect} from 'react-redux'
import {FaAngleDown} from 'react-icons/fa'

let UncheckedTodoList = ({data}) => {
    return(
        <div className='UncheckedTodos--Container'>
            <div className='UncheckedTodos--Title'>
                <FaAngleDown size={30} />
                <span>Unchecked Todos</span>
            </div>
    
            <div className='UncheckedTodos--List'>
                <ul>
                    {data.map(todo => (<TodoCard key={todo.id} {...todo} />))}        
                </ul>
            </div>
        </div>
    )
}

UncheckedTodoList.propTypes = {
    data: PropTypes.array.isRequired,
}

let getTodos = reduxState => {
    let getCheckedTodos = todo => todo.checked ? false : true
    let checkedTodos = reduxState.todos.filter(getCheckedTodos)
    return {data: checkedTodos}
}

export default connect(getTodos)(UncheckedTodoList)
