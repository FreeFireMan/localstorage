import {ADD_TO_WISH, REMOVE_FROM_WISH} from '../action-types';

const initialState = {
  wish: [],
  totalWish: 0,
  totalPriceWish: 0,
}

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISH: {
      return {
        ...state,
        wish: [...state.wish, action.payload],
        totalWish: state.totalWish + 1,
        totalPriceWish: state.totalPriceWish + action.payload.price,
      };
    }
    case REMOVE_FROM_WISH: {
      return {
        ...state,
        wish: state.wish.filter(el => el !== action.payload),
        totalWish: state.totalWish - 1,
        totalPriceWish: state.totalPriceWish - action.payload.price,
      };
    }
    default: {
      return state;
    }
  }
}

export default reduce;