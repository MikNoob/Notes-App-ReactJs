import React from 'react'
import PropTypes from 'prop-types'
import TodoCard from '../../todoCard'
import {connect} from 'react-redux'
import {FaAngleDown} from 'react-icons/fa'

let CheckedTodoList = ({data}) => {
    return (
        <div className='CheckedTodos--Container'>
            <div className='CheckedTodos--Title'>
                <FaAngleDown size={30} />
                <span>Checked Todos</span>
            </div>
    
            <div className='CheckedTodos--List'>
                <ul>
                    {data.map(todo => (<TodoCard key={todo.id} {...todo} />))}
                </ul>
            </div>
        </div>
    )
}

CheckedTodoList.propTypes = {
    data: PropTypes.array.isRequired
}

let getTodos = reduxState => {
    let getCheckedTodos = todo => todo.checked ? true : false
    let checkedTodos = reduxState.todos.filter(getCheckedTodos)
    return {data: checkedTodos}
}

export default connect(getTodos)(CheckedTodoList)