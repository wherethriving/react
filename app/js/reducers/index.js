import { combineReducers } from 'redux'
import todo from './todo' 
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
    todo,
    routing
})

export default rootReducer
