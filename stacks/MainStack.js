import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabsStack from './TabsStack';
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';

import BackArrow from '../components/BackArrow/BackArrow';
import {COLORS} from '../constants/styleConstans';

import ThemeContext from '../Contexts/ThemeContext';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const {theme} = useContext(ThemeContext);

  const screensOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: theme === 'dark' ? COLORS.darkGrey : COLORS.white,
    },
    headerTitleStyle: {
      color: theme === 'dark' ? COLORS.white : COLORS.black,
    },
    headerTitleAlign: 'center',
    headerLeft: () => (
      <BackArrow onPress={navigation.goBack} size={35} color={COLORS.blue} />
    ),
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        options={{
          headerShown: false,
        }}
        component={TabsStack}
      />
      <Stack.Screen
        name="EditProfile"
        options={screensOptions}
        component={EditProfilePage}
      />
      <Stack.Screen
        name="Settings"
        options={screensOptions}
        component={SettingsPage}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
