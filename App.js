/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import RegisterPage from './pages/RegisterPage/RegisterPage';
const App = () => {
  return (
    <Provider store={store}>
      <RegisterPage />
    </Provider>
  );
};

export default App;
