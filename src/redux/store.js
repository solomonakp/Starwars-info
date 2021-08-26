import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './index'

const initialState = {}

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)

export const makeStore = (
  storeReducer = rootReducer,
  storeInitialState = initialState
) => createStore(storeReducer, storeInitialState, compose(...middleware))

export default store
