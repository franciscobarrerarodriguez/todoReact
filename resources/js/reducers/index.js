import { combineReducers } from 'redux';

import { toDos } from './toDos';
import { visibilityFilter } from './visibilityFilters';


export default combineReducers({
    toDos,
    visibilityFilter
})
