import React from 'react'
import { Route } from 'react-router'
import  TodoPage  from '../containers/TodoPage'

export default (
    <Route path='/play' component={ TodoPage }>
        <Route path="todo" component={ TodoPage } />
    </Route>
)
