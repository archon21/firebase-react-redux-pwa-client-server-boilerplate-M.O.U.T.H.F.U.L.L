import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import firebase from './firebase'
import util from './util'

const reducer = combineReducers({firebase, util})
let middleware;
process.env.NODE_ENV === 'development'
  ? (middleware = composeWithDevTools(
      applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
    ))
  : (middleware = applyMiddleware(thunkMiddleware));

const store = createStore(reducer, middleware);

export default store
export * from './firebase'
export * from './util'
