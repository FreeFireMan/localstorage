import {ADD_TO_CARD, REMOVE_FROM_CARD} from '../action-types';

const initialState = {
  card: [],
  totalCard: 0,
  totalPriceCard: 0,
}

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD: {
      return {
        ...state,
        card: [...state.card, action.payload],
        totalCard: state.totalCard + 1,
        totalPriceCard: state.totalPriceCard + action.payload.price,
      };
    }
    case REMOVE_FROM_CARD: {
      return {
        ...state,
        card: state.card.filter(el => el !== action.payload),
        totalCard: state.totalCard - 1,
        totalPriceCard: state.totalPriceCard - action.payload.price,
      };
    }
    default: {
      return state;
    }
  }
}

export default reduce;