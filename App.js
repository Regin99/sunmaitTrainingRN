/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './redux/store';

import ThemeContext from './Contexts/ThemeContext';
//stacks
import Main from './stacks/Main';
import Auth from './stacks/Auth';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggIn);
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <NavigationContainer initialRouteName="LogIn">
        {isLoggedIn ? <Main /> : <Auth />}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
