import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

import ToDoList from './containers/ToDoList';

const root = document.getElementById('app');
const store = createStore(rootReducer);

const start = (
    <Provider store={store}>
        <ToDoList/>
    </Provider>
)
ReactDom.render(start, root);
