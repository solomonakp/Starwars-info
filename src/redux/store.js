import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// imports index.tx of reducers
import rootReducer from './index';

// createStore takes initialState as a parameter
const initialState = {};

//  middleware
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
