import React from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Header from '../Header/Header';
import TextInput from '../TextInput/TextInput';
import Counter from '../Counter/Counter';
import PassiveDisplay from '../PassiveDisplay/PassiveDisplay';
import store from '../../store/store';


const App = () => {
  return (
    <Provider store={store}>
      <Header></Header>
      <TextInput></TextInput>
      <Counter></Counter>
      <PassiveDisplay></PassiveDisplay>
    </Provider>
  );
}

export default App;
