import {ADD_TO_WISH, REMOVE_FROM_WISH} from '../action-types';

const initFromLS = localStorage.getItem('wish');
const initialState = initFromLS ? JSON.parse(initFromLS) : {
  wish: [],
  totalWish: 0,
  totalPriceWish: 0,
  buttonWish: false,
}

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISH: {
      return {
        ...state,
        wish: [...state.wish, action.payload],
        totalWish: state.totalWish + 1,
        totalPriceWish: state.totalPriceWish + Math.floor(action.payload.price),
        buttonWish: true,
      };
    }
    case REMOVE_FROM_WISH: {
      return {
        ...state,
        wish: state.wish.filter(el => el !== action.payload),
        totalWish: state.totalWish - 1,
        totalPriceWish: state.totalPriceWish - Math.floor(action.payload.price),
        buttonWish: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default reduce;
