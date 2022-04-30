import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import TabsStack from '../Tabs';
//pages
import EditProfile from '../../pages/EditProfile';
import Settings from '../../pages/Settings';

import BackArrow from '../../components/BackArrow/BackArrow';
import {COLORS} from '../../constants/styleConstans';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Main = () => {
  const navigation = useNavigation();
  const {theme} = useSelector(state => state.settings);

  const screensOptions = () => ({
    headerStyle: styles.themedBG[theme],
    headerTitleStyle: styles.headerTitle[theme],
    headerTitleAlign: 'center',
    headerLeft: () => (
      <BackArrow onPress={navigation.goBack} size={35} color={COLORS.blue} />
    ),
  });

  const navigateToSearch = () =>
    navigation.navigate('Search', {searchFocus: true});

  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => navigateToSearch());
    messaging()
      .getInitialNotification()
      .then(remoteMessage => remoteMessage && navigateToSearch());
  }, []);

  return (
    <Stack.Navigator initialRouteName="Tabs">
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
        component={EditProfile}
      />
      <Stack.Screen
        name="Settings"
        options={screensOptions}
        component={Settings}
      />
    </Stack.Navigator>
  );
};

export default Main;
