import { combineReducers } from 'redux'
import reducer from './reducer' 
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
    reducer,
    routing
})

export default rootReducer
