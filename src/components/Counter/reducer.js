import produce from 'immer';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'add':
        // state.count = state.count + action.payload;
        // return {...state};
        // break;
        draft.count += action.payload;
        break;
      case 'sub':
        // state.count = state.count - action.payload;
        // return {...state};
        // break;
        draft.count -= action.payload;
        break;
    }
  });

export default counterReducer;