import React from 'react';
import ReactDom from 'react-dom';

import ToDoList from './containers/ToDoList';

const root = document.getElementById('app');

ReactDom.render(<ToDoList />, root);
