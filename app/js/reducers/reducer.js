import { List, Map } from 'immutable';
import * as TYPES from '../constants/ActionTypes' 


const todos = List([
]);

const initialState = {
    todos
}

export default function reducer(state=initialState, action) {

    switch(action.type) {
        case TYPES.ADD_TODO:
            return { todos : state.todos.push(Map(action.payload))}
        case TYPES.TOGGLE_TODO:
            return { todos: state.todos.map(t => {
                if(t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
              }})
             } 
        default:
            return state; 
    }
}
