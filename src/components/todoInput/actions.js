import Crypto from 'crypto'
import {createTodoObject} from '../../view/TodoObject'

let createTodoObj = todoName => {
    let id = Crypto.randomBytes(10).toString('hex')
    return createTodoObject(id ,todoName)
}

let addTodo = tdName => {
    let tdObj = createTodoObj(tdName)
    return({
        type: 'ADD_TODO',
        todo: tdObj
    })
}

export default addTodo