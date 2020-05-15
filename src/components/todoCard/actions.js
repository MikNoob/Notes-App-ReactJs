let checkTodo = id => ({
    type: 'CHECK_TODO',
    id
})

let uncheckTodo = id => ({
    type: 'UNCHECK_TODO',
    id
})

export {checkTodo, uncheckTodo}