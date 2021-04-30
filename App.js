import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './src/reducers';
import CovidTracker from './src/pages/CovidTracker';
import {apiCallMiddleware} from './src/utils/apiCallMiddleware';

const store = createStore(rootReducer, {}, applyMiddleware(apiCallMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <CovidTracker />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
