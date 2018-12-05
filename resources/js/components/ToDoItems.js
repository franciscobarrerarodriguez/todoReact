import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './ToDoItems.css';

class ToDoItems extends Component {

    createToDo = (toDo, index) => {
        return (
            <li key={ index } className="to-do-item">
                <div className="to-do-desc">{ toDo }</div>
                <button onClick={ () => this.deleteToDo(index) } className="to-do-times">
                    <FontAwesomeIcon icon={ faTimes } />
                </button>
            </li>
        )
    }

    deleteToDo = (index) => {
        this.props.deleteToDo(index);
    }

    render() {
        return (
            <ul className="to-dos">
                {
                    this.props.toDos.map((toDo, index) => {
                        return this.createToDo(toDo, index)
                    })
                }
            </ul>
        )
    }
}

export default ToDoItems;