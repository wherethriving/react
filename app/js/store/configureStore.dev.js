import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from '../middleware/api'
import { promiseMiddleware } from '../middleware/middlewares'
import rootReducer from '../reducers'
import DevTools from '../containers/common/DevTools'

export default function configurateStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, promiseMiddleware, createLogger()),
            DevTools.instrument()
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default 
            store.replaceReducer(nextRootReducer)
        }
        )
    }

    return store
}
