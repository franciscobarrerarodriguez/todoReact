import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewToDo = (props) => (
    <form onSubmit={ props.addToDo }>
        <input value={ props.NewToDo }
               onChange={ props.newToDoChange } type="text"
               placeholder="Tarea..."
               name="new-task" />
        <button type="submit">
            <FontAwesomeIcon icon="stroopwafel" />
        </button>
    </form>
)

export default NewToDo;
