let initialState = {
    todos: []
}

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.todo]}

        case 'DELETE_TODO':
            let newtodoArray = state.todos.filter(todo => todo.id !== action.id ? true : false)
            return {...state, todos: newtodoArray}

        case 'CHECK_TODO':
            let todoIndex = state.todos.findIndex(todo => todo.id === action.id)
            let newTodoArray = state.todos.slice()
            newTodoArray[todoIndex].checked = true
            return {...state, todos: newTodoArray}

        default:
            return state
    }
}

export default reducer