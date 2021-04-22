import {
  INC,
  DEC,
  RESET,
  INC_CUSTOM,
} from '../action-types';

const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {...state, counter: state.counter + 1};
    }
    case DEC: {
      return {...state, counter: state.counter - 1};
    }
    case RESET: {
      return {...state, counter: 0};
    }
    case INC_CUSTOM: {
      return {...state, counter: state.counter + action.payload};
    }
    default: {
      console.log('action', action.type, 'does not exist.');
      return state;
    }
  }
}

export default reducer;