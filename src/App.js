import React from 'react';
import './App.css';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./redux";
import {incCustom, inc, dec, reset,} from './redux/action-creators';

function App() {
  const counter = useSelector(({counter}) => counter);
  const dispatch = useDispatch();

  return (
    // <Provider store={store}>
      <div className={'App'}>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(incCustom(102))}>inc custom</button>
        <button onClick={() => dispatch(inc())}>inc</button>
        <button onClick={() => dispatch(dec())}>dec</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    // </Provider>
  );
}

export default App;