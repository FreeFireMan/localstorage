import {INC, DEC, RESET, INC_CUSTOM} from '../action-types';

const initFromLS = localStorage.getItem('counter');
const initialState = initFromLS ? JSON.parse(initFromLS) : {
  counter: 0,
  isAllowedToChange: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_CUSTOM: {
      return {...state, counter: state.counter + action.payload};
    }
    case INC: {
      return {...state, counter: state.counter + 1};
    }
    case DEC: {
      return {...state, counter: state.counter - 1};
    }
    case RESET: {
      return {...state, counter: 0};
    }
    default:
      return state;
  }
}

export default reducer;