let initialState = {
    CheckedTodos: [],
    UncheckedTodos: []
}

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return ({...state, UncheckedTodos: [...state.UncheckedTodos, action.todo]})

        case 'DELETE_UNCHECKED_TODO':
            let unchTodo = state.UncheckedTodos
            let newUncheckedTodos = unchTodo.filter(todo => todo.id === action.id ? false : true)
            return ({
                ...state,
                UncheckedTodos: newUncheckedTodos
            })
            
        default:
            return state
    }
}

export default reducer