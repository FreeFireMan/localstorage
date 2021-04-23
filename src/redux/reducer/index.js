const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {...state, counter: state.counter + 1};
    }
  }
}