import React from 'react'
import { Route } from 'react-router'
import TodoPage from '../containers/TodoPage'

export default (
    <Route path='/admin' component={ TodoPage }>
        <Route path="todo" component={ TodoPage } />
    </Route>
)


