/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useLayoutEffect, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './redux/store';

import ThemeContext from './Contexts/ThemeContext';
import MainStack from './stacks/MainStack';
import AuthStack from './stacks/AuthStack';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggIn);

  const [theme, setTheme] = useState('light');
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{theme, isDark, setIsDark}}>
      <NavigationContainer initialRouteName="LogIn">
        {isLoggedIn ? <MainStack /> : <AuthStack />}
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
