import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../route/routes'
import routeTodo from '../route/routerTodo'
import DevTools from './DevTools'
import { Router } from 'react-router'


export default class Root extends Component {

    render() {
        let { store, history } = this.props

        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes, routeTodo} />
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

