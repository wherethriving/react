import React from 'react'
import { Route } from 'react-router'
import { TodoList, Todo } from '../containers/containers'

export default (
    <Route path='/admin' component={ TodoList }>
        <Route path="todo" component={ TodoList } />
    </Route>
)
