export const INCREASE_COUNTER = "INCREASE_COUNTER";

export const increaseCounter = payload => {
  return {
    type: INCREASE_COUNTER,
    payload
  };
};

const initialState = {
  counter: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};
