import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../route/routes'
import DevTools from './DevTools'
import { Router } from 'react-router'
import { TodoList } from './containers'
import { List, Map } from 'immutable' 
import { addTodo, toggleTodo } from '../actions/todo' 

export default class Root extends Component {


    render() {
        let { store, history, todos, dispatch } = this.props

    const dummyTodos = List([
        Map({ id: 0, idDone: true, text: 'make components' }),
        Map({ id: 1, idDone: false, text: 'design actions' }),
        Map({ id: 2, idDone: true, text: 'implement reducer' }),
        Map({ id: 3, idDone: true, text: 'connect components' })
    ]);

        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} />
                    <TodoList todos={dummyTodos} 
                            />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

