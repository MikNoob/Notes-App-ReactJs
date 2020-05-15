import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TodoCard from '../../todoCard'
import {connect} from 'react-redux'
import {FaAngleDown, FaAngleRight} from 'react-icons/fa'

let UncheckedTodoList = ({data}) => {
    let [isActivated, setIsActivated] = useState(true)

    let handleClick = () => {
        if(isActivated)
            setIsActivated(isActivated = false)
        else
            setIsActivated(isActivated = true)
    }

    return(
        <div className='UncheckedTodos--Container'>
            <div className='UncheckedTodos--Title' onClick={handleClick}>
                {isActivated 
                ? <FaAngleDown size={30} /> 
                : <FaAngleRight size={30} />
                }
                <span>Unchecked Todos</span>
            </div>
    
            <ul className={isActivated ? 'listActivated' : 'listDesactivated'} >
                {data.map(todo => (<TodoCard key={todo.id} {...todo} />))}        
            </ul>
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
