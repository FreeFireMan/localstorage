import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer} from './reducers';

const persister = (store) => (next) => (action) => {
  next(action);

  const {wish, card} = store.getState();
  localStorage.setItem('wish', JSON.stringify(wish));
  localStorage.setItem('card', JSON.stringify(card));
}

const middlewares = [thunk, persister];

export const store = createStore(reducer, applyMiddleware(...middlewares));