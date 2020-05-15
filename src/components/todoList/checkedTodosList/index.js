import React from 'react'
import PropTypes from 'prop-types'
import {FaAngleDown} from 'react-icons/fa'

let CheckedTodoList = () => (
    <div className='CheckedTodos--Container'>
        <div className='CheckedTodos--Title'>
            <FaAngleDown size={30} />
            <span>Checked Todos</span>
        </div>
    </div>
)

CheckedTodoList.propTypes = {

}

export default CheckedTodoList