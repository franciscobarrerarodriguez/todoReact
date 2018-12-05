const toDos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state.toDos, action.toDo]
    }
}

export default toDos