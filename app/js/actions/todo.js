import * as TYPES from '../constants/ActionTypes' 
import { fetchAPI } from '../middleware/fetchAPI'

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

/*
export function toggleTodo(id) {
    let options = {
        method : 'DELETE',
    };
    let endpoint = `attr_confs/31`;
    return {
        type: TYPES.TOGGLE_TODO,
        payload: fetchAPI(endpoint, options), 
    };
}
*/
/*
export function toggleTodo(id) {
    let options = {
        method : 'POST',
        body : 
            {"confDictId":1,"attrName":"change联合主键","confParam":"yui","isOptional":true,"columnType":"String","description":"lian he zhu jian","isType":false}
    };
    let endpoint = `attr_confs`;
    return {
        type: TYPES.TOGGLE_TODO,
        payload: fetchAPI(endpoint, options), 
    };
}
*/

export function toggleTodo(id) {
    let options = {
        method : 'GET',
    };
    let endpoint = `attr_confs/${id}`;
    return {
        type: TYPES.TOGGLE_TODO,
        payload: fetchAPI(endpoint, options), 
    };
}


/*
export function toggleTodo(id) {
    return {
        type: TYPES.TOGGLE_TODO,
        payload: id
    };
}
*/
