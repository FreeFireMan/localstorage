import React, {useEffect} from 'react';
import './App.css';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from './redux';
import {loadProducts, addToCard, removeFromCard, addToWish, removeFromWish} from './redux/action-creators';

const Header = () => {
  const {totalWish, totalPriceWish} = useSelector(store => store.wish);
  const {totalCard, totalPriceCard} = useSelector(store => store.card);
  return (
    <header>
      <h1>Products List</h1>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <span>wish: {totalWish}</span>
          <span>card: {totalCard}</span>
        </div>
        <br />
        <div>
          <span>price in wish: {totalPriceWish}</span>
          <span>price in card: {totalPriceCard}</span>
        </div>
      </div>
    </header>
  );
}

const Products = () => {
  const {products, isLoading} = useSelector(store => store.products);
  const {wish} = useSelector(store => store.wish);
  const {card} = useSelector(store => store.card);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts());
    }
  }, []);
  return (
    <div>
      {isLoading && (
        <h2>LOADING...</h2>
      )}
      {!isLoading && products.length && products.map(el => (
        <div key={el.id} style={{width: '60%', margin: "10px auto"}}>
          <h3>{el.title}</h3>
          <h4>{el.price}</h4>
          <p>{el.description}</p>
          <button onClick={() => dispatch(
            !wish.includes(el.id) ? addToWish(el.id) : removeFromWish(el.id)
          )}
          style={{background: !wish.includes(el.id) ? 'green' : ''}}
          >add to wish</button>
          <button onClick={() => dispatch(
            !card.includes(el.id) ? addToCard(el.id) : removeFromCard(el.id)
          )}
          style={{background: !card.includes(el.id) ? 'green' : ''}}
          >add to card</button>
          <img src={el.image} style={{width: '100%'}} />
          <hr />
        </div>
      ))}
    </div>
  );
}

function App() {

  return (
    <Provider store={store}>
      <div className={'App'}>
        <Header />
        <Products />
      </div>
    </Provider>
  );
}

export default App;