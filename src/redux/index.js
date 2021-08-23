import { combineReducers } from 'redux';

import radioReducer from './radio/radioReducer';

const rootReducer = combineReducers({
  radio: radioReducer,
});

export default rootReducer;
