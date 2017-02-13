export const initialState = {
  count: 0,
  hasSetCount: false
};

export const actionTypes = {
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT',
  SET_COUNT: 'counter/SET_COUNT'
};

export const actions = {
  increment: () => dispatch =>
    dispatch({
      type: actionTypes.INCREMENT
    }),
  decrement: () => dispatch =>
    dispatch({
      type: actionTypes.DECREMENT
    }),
  getNewCount: (count = 100) => (dispatch, getState) => {
    if (getState().counter.hasSetCount) {
      return;
    }

    return new Promise((resolve) =>
      setTimeout(() => {
        dispatch({
          type: actionTypes.SET_COUNT,
          count
        });
        resolve();
      }, 1000)
    );
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    case actionTypes.SET_COUNT:
      return {
        ...state,
        count: action.count,
        hasSetCount: true
      };

    default:
      return state;
  }
};

export default reducer;
