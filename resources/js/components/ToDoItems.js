import React, { Component } from 'react';

import ToDoItem from './ToDoItem';

class ToDoItems extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.toDos.map((toDo, index) => {
                        return <ToDoItem key={ index } toDo={ toDo } />
                    })
                }
            </ul>
        )
    }
}

export default ToDoItems;