import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabsStack from './TabsStack';
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';

import BackArrow from '../components/BackArrow/BackArrow';
import {colors} from '../constants/styleConstans';

import ThemeContext from '../Contexts/ThemeContext';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const {isDark} = useContext(ThemeContext);

  const screensOptions = navigation => ({
    headerStyle: {
      backgroundColor: isDark ? colors.darkGrey : colors.white,
    },
    headerTitleStyle: {
      color: isDark ? colors.white : colors.black,
    },
    headerTitleAlign: 'center',
    headerLeft: () => (
      <BackArrow
        onPress={navigation.navigation.goBack}
        width={35}
        height={35}
        color={colors.blue}
      />
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
