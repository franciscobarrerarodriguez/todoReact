import React from 'react';

const NewToDo = (props) => (
    <form onSubmit={ props.addToDo }>
        <input value={ props.NewToDo } onChange={ props.newToDoChange } type="text" placeholder="Tarea..." name="new-task" />
        <button type="submit">
            Guardar
        </button>
    </form>
)

export default NewToDo;
