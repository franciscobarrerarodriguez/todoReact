import React, { Component } from 'react';

class ToDoItem extends Component {

    render() {
        return (
            <li>
                <div>
                    {
                        this.props.toDo
                    }
                </div>
                <button>pencil</button>
                <button>x</button>
            </li>
        )
    }
}

export default ToDoItem;