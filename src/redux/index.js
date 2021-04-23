import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducer";

import {INC, DEC, RESET, INC_CUSTOM} from './action-types';


const logger = (store) => (next) => (action) => {
  console.log(action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
}

const protectCounter = (store) => (next) => (action) => {
  const actionsForCounter = [INC_CUSTOM, INC, DEC, RESET];
  const {isAllowedToChange} = store.getState();
  if (!isAllowedToChange && actionsForCounter.includes(action.type)) {
    console.log('error');
    return;
  }
  next(action);
}

const persister = (store) => (next) => (action) => {
  next(action);
  const counter = store.getState();
  localStorage.setItem('counter', JSON.stringify(counter));
}

const middlewares = [protectCounter, /*logger,*/ persister];

export const store = createStore(reducer, applyMiddleware(...middlewares));