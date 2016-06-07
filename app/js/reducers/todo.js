import { List, Map } from 'immutable';
import * as TYPES from '../constants/ActionTypes' 

const todos = List([
    Map({ id: 0, isDone: true,  text: '0 components' }),
    Map({ id: 1, isDone: false,  text: '1 components' }),
    Map({ id: 2, isDone: false,  text: '2 components' }),
    Map({ id: 3, isDone: true,  text: '3 components' }),
    Map({ id: 4, isDone: false,  text: '4 components' })
]);

const initialState = {
    isFetching   : false,
    fetchSucceed : false,
    fetchFailed  : false,    
    todos,
    data: {},
    error: {},

}

export default (state=initialState, action) => {

    switch(action.type) {
        case TYPES.ADD_TODO:
            return { todos : state.todos.push(Map(action.payload)) }
        case TYPES.TOGGLE_TODO:
            return { todos: state.todos.map(t => {
                if(t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
              }})
             } 
         case `${TYPES.TOGGLE_TODO}_FETCHING`: 
             return Object.assign({}, state, {
                isFetching   : true, 
                fetchSucceed : false,
                fetchFailed  : false, 
            });
         case `${TYPES.TOGGLE_TODO}_SUCCEED`: 
             return Object.assign({}, state, {
                data : action.data,
             }, {
                isFetching   : false, 
                fetchSucceed : true,
                fetchFailed  : false, 
            });
         case `${TYPES.TOGGLE_TODO}_FAILED`: 
             return Object.assign({}, state, {
                error : action.error
             }, {
                isFetching   : false, 
                fetchSucceed : false,
                fetchFailed  : true, 
            });
        default:
            return state; 
    }
}
