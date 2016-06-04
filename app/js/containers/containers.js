import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions/todo'
import * as components from '../components/components'

export const TodoList = connect(
    function mapStateToProps(state) {
        const todos = state.reducer.todos;
        return {
            todos 
        }

    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(components.TodoList);

