import {combineReducers} from "redux";
import counterReducer from './counter-reducer';
import productsReducer from './products-reducer';

export const reducer = combineReducers({
  counter: counterReducer,
  products: productsReducer,
})