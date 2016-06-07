import React, { Component, PropTypes } from 'react';
import Todo from './Todo'

export default class TodoList extends Component {

    render () {

    const { data, todos, toggleTodo, addTodo } = this.props;

    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;

        if (isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);


    return (
        <div className='todo'>
            <input type='text' 
                    className='todo__entry'
                    placeholder='Add todo' 
                    onKeyDown={onSubmit}  
                        />
            <ul className='todo__list'>
                {todos.map(t => (
                    <li className='todo__item' 
                        key={t.get('id')}
                        onClick={toggleClick(t.get('id'))}
                    >
                            <Todo todo={t.toJS()} />
                    </li>
                ))
                }
            </ul>
            Hello
            {data.attrName}
        </div>
    );
    }
}

TodoList.propTypes = {
    todos       : PropTypes.object,
    addTodo     : PropTypes.func,
    toggleTodo  : PropTypes.func
}

