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
              !wish.includes(el) ? addToWish(el) : removeFromWish(el)
            )}
                  style={{background: !wish.includes(el) ? 'green' : ''}}>add to wish</button>

          <button onClick={() => dispatch(
            !card.includes(el) ? addToCard(el) : removeFromCard(el)
          )}
                  style={{background: !card.includes(el) ? 'green' : ''}}
          >add to card</button>

          <img src={el.image} style={{width: '100%'}} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Products;