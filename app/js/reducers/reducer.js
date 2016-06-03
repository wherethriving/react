import { List, Map } from 'immutable';

const init = List([]);

const dummyTodos = List([
    Map({ id:0, isDone: true, text: 'make components'}),
    Map({ id: 1, idDone: false, text: 'design actions' }),
    Map({ id: 2, idDone: true, text: 'implement reducer' }), 
    Map({ id: 3, idDone: true, text: 'connect components' })
]);

export default function reducer(todos=dummyTodos, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return todos.push(Map(action.payload));
        case 'TOGGLE_TODO':
            return todos.map(t => {
                if(t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
                }
            }
            );
        default:
            return todos;
    }
}

