import { applyMiddleware, createStore, combineReducers } from 'redux'
import asset from './reducers/asset'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

export default createStore(combineReducers({
    asset,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        loggerMiddleware,
    ),
)
