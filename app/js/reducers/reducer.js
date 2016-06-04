import { List, Map } from 'immutable';
 import merge from 'lodash/merge'


//const todos = List([
//]);

const todos = List([
    Map({ id: 0, isDone: false, text: 'make components'}),
    Map({ id: 1, idDone: true, text: 'design actions'}),
    Map({ id: 2, idDone: false, text: 'implement reducer'}), 
    Map({ id: 3, idDone: true, text: 'connect components'})
]);
const initialState = {
    todos
}

export default function reducer(state=initialState, action) {
    console.log(state);

    switch(action.type) {
        case 'ADD_TODO':
            return merge({}, state, {
                todos : todos.push(Map(action.payload)) 
        });
        case 'TOGGLE_TODO':
            const todos1 = todos.map(t => {
                if(t.get('id') === action.payload) {
                    console.log("===========");
                    console.log(t.get('isDone'));
                    const t1 = t.update('isDone', isDone => !isDone);
                    console.log(t1.get('isDone'));
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
              }}); 
            return merge({}, state, {
                todos : todos1
            });       
        default:
            return state; 
    }
}
