import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import  configurateStore from './store/configureStore'
import Root from './containers/common/Root'

import '../styles/todo.css'

const store = configurateStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
    
  document.getElementById('root')
)
