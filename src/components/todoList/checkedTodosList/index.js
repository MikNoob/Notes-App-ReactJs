import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TodoCard from '../../todoCard'
import {connect} from 'react-redux'
import {FaAngleDown, FaAngleRight} from 'react-icons/fa'

let CheckedTodoList = ({data}) => {
    let [isActivated, setIsActivated] = useState(false)

    let handleClick = () => {
        if(isActivated)
            setIsActivated(isActivated = false)
        else
            setIsActivated(isActivated = true)
    }

    return (
        <div className='CheckedTodos--Container'>
            <div className='CheckedTodos--Title' onClick={handleClick}>
                {isActivated 
                ? <FaAngleDown size={30} /> 
                : <FaAngleRight size={30} />
                }
                <span>Checked Todos</span>
            </div>
    
            <ul className={isActivated ? 'listActivated' : 'listDesactivated'} >
                {data.map(todo => (<TodoCard key={todo.id} {...todo} />))}
            </ul>
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