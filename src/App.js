import React from "react";
import './App.css';
import {useDispatch, useSelector, connect} from "react-redux";

import {
  incCustomAction,
  incAction,
  decAction,
  resetAction,
  incCustomAction2,
  incAction2,
  decAction2,
  resetAction2,
} from './redux/action-creators';

function App() {
  const counter = useSelector(({counter: {counter}}) => counter);
  const counter2 = useSelector(({counter2: {counter2}}) => counter2);

  const dispatch = useDispatch();
  return (
    <div className={'App'}>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(incCustomAction(102))}>inc custom</button>
      <button onClick={() => dispatch(incAction())}>inc</button>
      <button onClick={() => dispatch(decAction())}>dec</button>
      <button onClick={() => dispatch(resetAction())}>reset</button>

      <h1>{counter2}</h1>
      <button onClick={() => dispatch(incCustomAction2(204))}>inc custom2</button>
      <button onClick={() => dispatch(incAction2())}>inc2</button>
      <button onClick={() => dispatch(decAction2())}>dec2</button>
      <button onClick={() => dispatch(resetAction2())}>reset2</button>
    </div>
  );
}

export default App;


/*function App({counter, inc, dec, reset}) {
  return (
    <div className={'App'}>
      <h1>{counter}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})
const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch({type: 'INC'}),
  dec: () => dispatch({type: 'DEC'}),
  reset: () => dispatch({type: 'RESET'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App); */
