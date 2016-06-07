import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { promiseMiddleware } from '../middleware/middlewares'

export default function configurateStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, promiseMiddleware)
    )
}
