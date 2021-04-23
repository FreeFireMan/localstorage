import {ADD_TO_CARD, REMOVE_FROM_CARD} from '../action-types';

const initFromLS = localStorage.getItem('card');
const initialState = initFromLS ? JSON.parse(initFromLS) : {
  card: [],
  totalCard: 0,
  totalPriceCard: 0,
  buttonCard: false,
}

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD: {
      return {
        ...state,
        card: [...state.card, action.payload],
        totalCard: state.totalCard + 1,
        totalPriceCard: state.totalPriceCard + Math.floor((action.payload.price * 100) /100),
        buttonCard: true
      };
    }
    case REMOVE_FROM_CARD: {
      return {
        ...state,
        card: state.card.filter(el => el !== action.payload),
        totalCard: state.totalCard - 1,
        totalPriceCard: state.totalPriceCard - Math.floor((action.payload.price * 100) /100),
        buttonCard: false
      };
    }
    default: {
      return state;
    }
  }
}

export default reduce;