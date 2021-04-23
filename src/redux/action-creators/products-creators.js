import {START_LOADING, END_LOADING, SET_PRODUCTS} from '../action-types';

const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
const startLoading = () => ({type: START_LOADING});
const endLoading = () => ({type: END_LOADING});

const loadProducts = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const resp = await fetch('https://fakestoreapi.com/products');
    const json = await resp.json();
    dispatch(setProducts(json));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(endLoading());
  }
}

export {setProducts, startLoading, endLoading, loadProducts}