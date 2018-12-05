import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import ToDoItems from '../components/ToDoItems';

import './toDoList.css';

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

    deleteToDo = (index) => {
        var toDos = this.state.toDos;

        toDos.splice(index, 1);

        this.setState({ toDos: toDos});
    }

    newToDoChange = (event) => {
        this.setState({ toDo: event.target.value });
    }

    render() {
        return (
            <div className="to-do-list">
                <div className="container">
                    <form onSubmit={ this.addToDo } className="to-do-form">
                        <input value={ this.state.toDo }
                               onChange={ this.newToDoChange }
                               type="text"
                               placeholder="Tarea..."
                               name="new-task" />
                        <button type="submit">
                            <FontAwesomeIcon icon={ faSave } />
                        </button>
                    </form>

                    <ToDoItems
                        toDos={ this.state.toDos }
                        deleteToDo={ this.deleteToDo } />
                </div>
            </div>
        )
    }
}

export default ToDoList;
