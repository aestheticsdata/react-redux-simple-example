import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from '../components/Counter/reducer';
import textReducer from '../components/TextInput/reducer';

const createReducers = combineReducers({
  counterReducer,
  textReducer,
});

let store = createStore(createReducers, composeWithDevTools());

export default store;
