import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogInPage from '../pages/LogInPage/LogInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import PrivacyModal from '../pages/PrivacyModal/PrivacyModal';

import BackArrow from '../components/BackArrow/BackArrow';

import {COLORS, SIZES} from '../constants/styleConstans';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const signUpOptions = navigation => ({
    title: 'Sign Up',
    headerLeft: () => (
      <BackArrow
        onPress={navigation.navigation.goBack}
        size={35}
        color={COLORS.blue}
      />
    ),
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: SIZES.l,
    },
  });

  return (
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
  );
};
export default AuthStack;
