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
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PrivacyModal from './pages/PrivacyModal/PrivacyModal';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomIcon from './components/BottomIcon/BottomIcon';
import BackArrow from './components/BackArrow/BackArrow';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggIn);

  const tabBarOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'home-outline' : 'home';
      } else if (route.name === 'Search') {
        iconName = focused ? 'search-outline' : 'search';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person-outline' : 'person';
      }
      return <BottomIcon name={iconName} />;
    },
    tabBarStyle: {
      height: 80,
      justifyContent: 'space-between',
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#fff',
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

  const signUpOptions = navigation => ({
    title: 'Sign Up',
    headerLeft: () => (
      <BackArrow
        src={{
          uri: 'https://img.icons8.com/ios/344/circled-left-2.png',
        }}
        onClick={() => navigation.navigation.goBack()}
      />
    ),
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  });

  return (
    <NavigationContainer initialRouteName="LogIn">
      {isLoggedIn ? (
        <BottomTab.Navigator screenOptions={tabBarOptions}>
          <BottomTab.Screen name="Home" component={HomePage} />
          <BottomTab.Screen name="Search" component={SearchPage} />
          <BottomTab.Screen name="Profile" component={ProfilePage} />
        </BottomTab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="LogIn"
              component={LogInPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpPage}
              options={signUpOptions}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: 'modal',
              headerShown: false,
            }}>
            <Stack.Screen name="PrivacyModal" component={PrivacyModal} />
          </Stack.Group>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  //isThisGoodPractice?
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
