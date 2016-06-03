import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import  configurateStore from './store/configureStore'
import Root from './containers/Root'

import '../styles/todo.css'

//const store = createStore(reducer);
const store = configurateStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
       
    
  //<Route path='/' component={ TodoList }> 
    //    <Route path='todo' component={ TodoList }/>
    //</Route>
  // <TodoList />
  //</Provider>,
  document.getElementById('root')
)