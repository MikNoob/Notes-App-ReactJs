let checkTodo = id => ({
    type: 'CHECK_TODO',
    id
})

let uncheckTodo = id => ({
    type: 'UNCHECK_TODO',
    id
})

let editTodo = (id, newName) => ({
    type: 'EDIT_TODO',
    id,
    newName
})

export {checkTodo, uncheckTodo, editTodo}