import * as TYPES from '../constants/ActionTypes' 

const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
    return {
        type: TYPES.ADD_TODO,
        payload: {
            id: uid(),
            idDone: false,
            text: text
        }
    };    
}

export function toggleTodo(id) {
    return {
        type: TYPES.TOGGLE_TODO,
        payload: id
    };
}

