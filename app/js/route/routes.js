import React from 'react'
import { Route } from 'react-router'
import TodoList from '../containers/containers'

export default (
    <Route path='/' component={ TodoList }>
        <Route path="/todo" component={ TodoList } />
    </Route>
)
