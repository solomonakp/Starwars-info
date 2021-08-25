import { combineReducers } from 'redux'

import AppReducer from './reducers/AppReducer'

const rootReducer = combineReducers({
  app: AppReducer,
})

export default rootReducer
