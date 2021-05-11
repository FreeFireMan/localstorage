import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {addToCard, addToWish, loadProducts, removeFromCard, removeFromWish} from "../redux/action-creators";

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
              !wish.some(item => item.id === el.id) ? addToWish(el) : removeFromWish(el)
            )}
                  style={{background: !wish.some(item => item.id === el.id) ? 'green' : ''}}>add to wish</button>
          <button onClick={() => dispatch(
              !card.some(item => item.id === el.id) ? addToCard(el) : removeFromCard(el)
          )}
                  style={{background: !card.some(item => item.id === el.id) ? 'green' : ''}}
          >add to card</button>

          <img src={el.image} style={{width: '100%'}} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Products;
