import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions/todo'
import TodoList from '../components/TodoList'
import React, { Component, PropTypes } from 'react' 

class TodoPage extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    addTodo (text) {
        let {
            dispatch 
        } = this.props;
        dispatch(addTodo(text));
    }

    toggleTodo (id) {
        let {
            dispatch
        } = this.props;
        dispatch(toggleTodo(id));
    }

   render() {
        const { todos } = this.props;
       
        console.log(this.props);
        return (
            <div>
                <TodoList todos={todos}
                addTodo = { this.addTodo }
                toggleTodo = { this.toggleTodo }
                    />
            </div>
        )
   }

}

TodoPage.propTypes = {
    todos   : PropTypes.object
}

function mapStateToProps(state) {
    const todos = state.reducer.todos;
    return {
        todos 
    }
}

export 
default connect(
    mapStateToProps
)(TodoPage)

