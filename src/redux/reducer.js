let initialState = {
    todos: []
}

let reducer = (state = initialState, action) => {
    let toggleCheck = (isChecking) => {
        let todoIndex = state.todos.findIndex(todo => todo.id === action.id)
        let newTodoArray = state.todos.slice()

        if(isChecking)        
            newTodoArray[todoIndex].checked = true
        else
            newTodoArray[todoIndex].checked = false

        return {...state, todos: newTodoArray}
    }

    switch(action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.todo]}

        case 'DELETE_TODO':
            let newtodoArray = state.todos.filter(todo => todo.id !== action.id ? true : false)
            return {...state, todos: newtodoArray}

        case 'CHECK_TODO':
            return toggleCheck(true)

        case 'UNCHECK_TODO':
            return toggleCheck(false)

        case 'EDIT_TODO':
            let todoIndex = state.todos.findIndex(todo => todo.id === action.id)
            let newTodoArray = state.todos.slice()
            newTodoArray[todoIndex].name = action.newName
            return {...state, todos: newTodoArray}

        default:
            return state
    }
}

export default reducer