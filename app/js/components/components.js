import React from 'react';

export function Todo(props) {
    const { todo } = props;
    if(todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>;
    }
}

export function TodoList(props) {
    const { toggleTodo, addTodo } = props;
    const todos = props.todos;

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
        </div>
    );
}

