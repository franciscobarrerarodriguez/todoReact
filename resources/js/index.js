import React from 'react';
import ReactDom from 'react-dom';

import ToDoList from './containers/ToDoList';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);

const root = document.getElementById('app');

ReactDom.render(<ToDoList />, root);
