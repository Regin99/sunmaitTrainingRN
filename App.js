/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';

//stacks
import Main from './stacks/Main';
import Auth from './stacks/Auth';

import Loader from './components/Loader/Loader';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggIn);

  return (
    <NavigationContainer initialRouteName="LogIn">
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
