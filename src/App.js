import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {incCustom, inc, dec, reset,
  setProducts, startLoading, endLoading, loadProducts} from './redux/action-creators';

const Products = () => {
  const {products, isLoading} = useSelector(store => store.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {

  }
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div>
      <h1>ProductsList</h1>
      {isLoading && (<h1>LOADING...</h1>)}
      {
        !isLoading && !!products.length && products.map(el => (
          <div key={el.id} style={{width: '60%', margin: '10px auto'}}>
            <h3>{el.title}</h3>
            <h4>{el.price}</h4>
            <p>{el.description}</p>
            <img src={el.image} style={{width: '100%'}} />
            <hr />
          </div>
        ))
      }
    </div>
  );
}

function App() {
  const {counter} = useSelector(({counter}) => counter);
  const dispatch = useDispatch();
  return (
    <div className={'App'}>
      <Products />
      <h1>{counter}</h1>
      <button onClick={() => dispatch(incCustom(102))}>inc custom</button>
      <button onClick={() => dispatch(inc())}>inc</button>
      <button onClick={() => dispatch(dec())}>dec</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;