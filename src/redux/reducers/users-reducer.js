import {ON_USER_LOADED, ON_ADD_TO_BAD, REMOVE_FROM_BAD} from '../action-types';

const initialState = {
  users: [],
  badEmployees: [],
}

const reducer =(state = initialState, action) => {
  switch (action.type) {
    case ON_USER_LOADED: {
      return {...state, users: action.payload};
    }
    case ON_ADD_TO_BAD: {
      return {...state, badEmployees: [...state.badEmployees, action.payload]};
    }
    case REMOVE_FROM_BAD: {
      return {...state, badEmployees: state.badEmployees.filter(el => el !== action.payload)};
    }
    default: {
      return state;
    }
  }
}

export default reducer;