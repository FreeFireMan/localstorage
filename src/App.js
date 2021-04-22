import React, {useMemo, useState, memo, useCallback, useReducer} from "react";
import './App.css';

const fn = (a, b) => {
  console.log('called');
  return Math.pow(a, b);
}

const Child = memo(() => {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(prev => prev + 1);
  }
  console.log('rerender child');
  return (
    <>
      <h1>child comp</h1>
      <button onClick={inc}>{counter}</button>
    </>
  );
})

const initialState = {
  counter2: 0,
  counter3: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc2': {
      return {...state, counter2: state.counter2 + 1};
    }
    case 'dec2': {
      return {...state, counter2: state.counter2 - 1};
    }
    case 'inc3': {
      return {...state, counter3: state.counter3 + 1};
    }
    case 'dec3': {
      return {...state, counter3: state.counter3 - 1};
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(2);

  const [state, dispatch] = useReducer(reducer, initialState);

  const inc = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);
  const inc1 = useCallback(() => {
    setCounter1(prev => prev + 1);
  }, []);

  const complexLogic = useMemo(() => {
    return fn(4, counter1);
  }, [counter1]);

  return (
    <div className={(counter === 1) ? 'App Bpp' : 'App'}>
      <button onClick={inc}>{counter}</button>
      <button onClick={inc1}>{counter1}</button>

      <h1>{state.counter2}</h1>
      <button onClick={() => dispatch({type: 'inc2'})}>inc2</button>
      <button onClick={() => dispatch({type: 'dec2'})}>dec2</button>

      <h1>{state.counter3}</h1>
      <button onClick={() => dispatch({type: 'inc3'})}>inc3</button>
      <button onClick={() => dispatch({type: 'dec3'})}>dec3</button>

      <Child inc1={inc1} />
    </div>
  );
}

export default App;
