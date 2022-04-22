import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

//pages
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Profile from '../../pages/Profile';

import BottomIcon from '../../components/BottomIcon/BottomIcon';

import styles from './styles';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  const {theme} = useSelector(state => state.settings);

  const bottomStackOptions = ({route}) => ({
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
    headerStyle: styles.themedBG[theme],
    headerTitleStyle: styles.headerTitle[theme],
    headerTitleAlign: 'center',
    tabBarStyle: [styles.themedBG[theme], styles.tabBar],
    tabBarLabelStyle: styles.tabBarLabel,
  });
  return (
    <BottomTab.Navigator screenOptions={bottomStackOptions}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen
        name="Profile"
        options={{
          headerTitle: 'My Profile',
        }}
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
