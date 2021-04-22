import {combineReducers} from 'redux';

import counterOneReducer from './counter-one-reducer';
import counterTwoReducer from './counter-two-reducer';

export const reducer = combineReducers({
  counter: counterOneReducer,
  counter2: counterTwoReducer,
})