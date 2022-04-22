import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

//pages
import LogIn from '../../pages/LogIn';
import SignUp from '../../pages/SignUp';
import PrivacyModal from '../../pages/PrivacyModal';

import BackArrow from '../../components/BackArrow/BackArrow';

import {COLORS} from '../../constants/styleConstans';

import styles from './styles';

const Stack = createNativeStackNavigator();

const Auth = () => {
  const {theme} = useSelector(state => state.settings);

  const signUpOptions = ({navigation}) => ({
    title: 'Sign Up',
    headerLeft: () => (
      <BackArrow onPress={navigation.goBack} size={35} color={COLORS.blue} />
    ),
    headerStyle: styles.themed[theme],
    headerTitleStyle: [styles.headerTitle, styles.themed[theme]],
    headerTitleAlign: 'center',
  });

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
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
export default Auth;
