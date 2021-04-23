import {combineReducers} from "redux";
import productsReducer from './products';
import wishReducer from './wish';
import cardReducer from './card';

export const reducer = combineReducers({
  products: productsReducer,
  wish: wishReducer,
  card: cardReducer,
})