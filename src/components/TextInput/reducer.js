import produce from 'immer';

const initialState = {
  text: '',
};

const textReducer = (state = initialState, action) =>
  produce(state, draft => {
    if (action.type === 'changeText') {
      draft.text = action.payload
    }
  });

export default textReducer;