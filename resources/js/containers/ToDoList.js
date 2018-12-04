import React, { Component } from 'react';

import NewToDo from '../components/NewToDo';
import ToDoItems from '../components/ToDoItems';

class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toDo: '',
            toDos: [],
        }
    }

    addToDo = (event) => {
        event.preventDefault();

        if (this.state.toDo.length > 0) {
            this.setState({
                toDo: '',
                toDos: [...this.state.toDos, this.state.toDo]
            });
        }

    }

    newToDoChange = (event) => {
        this.setState({ toDo: event.target.value });
    }

    render() {
        return (
            <div>
                <NewToDo 
                    addToDo={ this.addToDo }
                    newToDoChange={ this.newToDoChange }
                />
                <ToDoItems toDos={ this.state.toDos } />
            </div>
        )
    }
}

export default ToDoList;
