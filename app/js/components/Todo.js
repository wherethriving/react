import React , { Component, PropTypes }from 'react';

export default class Todo extends Component {

    render() {
        const { todo } = this.props;
    
        if(todo.isDone) {
            return <strike>{todo.text}</strike>;
        } else {
            return <span>{todo.text}</span>;
        }
    }
}

Todo.propTypes = {
    todo    : PropTypes.object
}
