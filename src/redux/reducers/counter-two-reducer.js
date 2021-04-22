import {
  INC2,
  DEC2,
  RESET2,
  INC_CUSTOM2,
} from '../action-types';

const initialState = {
  counter2: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC2: {
      return {...state, counter2: state.counter2 + 1};
    }
    case DEC2: {
      return {...state, counter2: state.counter2 - 1};
    }
    case RESET2: {
      return {...state, counter2: 0};
    }
    case INC_CUSTOM2: {
      return {...state, counter2: state.counter2 + action.payload};
    }
    default: {
      console.log('action', action.type, 'does not exist.');
      return state;
    }
  }
}

export default reducer;