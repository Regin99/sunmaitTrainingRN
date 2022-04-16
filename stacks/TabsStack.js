import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ThemeContext from '../Contexts/ThemeContext';
import {COLORS, SIZES} from '../constants/styleConstans';

//pages
import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

import BottomIcon from '../components/BottomIcon/BottomIcon';

const BottomTab = createBottomTabNavigator();

const TabsStack = () => {
  const {theme} = useContext(ThemeContext);

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
    headerStyle: {
      backgroundColor: theme === 'dark' ? COLORS.darkGrey : COLORS.white,
    },
    headerTitleStyle: {
      color: theme === 'dark' ? COLORS.white : COLORS.darkGrey,
    },
    headerTitleAlign: 'center',
    tabBarStyle: {
      height: 80,
      justifyContent: 'space-between',
      paddingTop: SIZES.ms,
      paddingBottom: SIZES.ms,
      backgroundColor: theme === 'dark' ? COLORS.darkGrey : COLORS.white,
    },
    tabBarLabelStyle: {
      fontSize: SIZES.ms,
      fontWeight: 'bold',
    },
  });
  return (
    <BottomTab.Navigator screenOptions={bottomStackOptions}>
      <BottomTab.Screen name="Home" component={HomePage} />
      <BottomTab.Screen name="Search" component={SearchPage} />
      <BottomTab.Screen
        name="Profile"
        options={{
          headerTitle: 'My Profile',
        }}
        component={ProfilePage}
      />
    </BottomTab.Navigator>
  );
};

export default TabsStack;
