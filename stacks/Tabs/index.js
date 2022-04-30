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

//when u say to make this with switch, u mean that solution, or i need to restruct the BottomIcon component to get rid of ternary operators in cases
const BottomIcons = (name, focused) => {
  let iconName;
  switch (name) {
    case 'Home':
      iconName = focused ? 'home-outline' : 'home';
      break;
    case 'Search':
      iconName = focused ? 'search-outline' : 'search';
      break;
    case 'Profile':
      iconName = focused ? 'person-outline' : 'person';
      break;
    default:
      iconName = 'home';
  }
  return <BottomIcon name={iconName} />;
};

const Tabs = () => {
  const {theme} = useSelector(state => state.settings);

  const bottomStackOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      return BottomIcons(route.name, focused);
    },
    headerStyle: styles.themedBG[theme],
    headerTitleStyle: styles.headerTitle[theme],
    headerTitleAlign: 'center',
    tabBarStyle: [styles.themedBG[theme], styles.tabBar],
    tabBarLabelStyle: styles.tabBarLabel,
  });

  return (
    <BottomTab.Navigator
      screenOptions={bottomStackOptions}
      initialRouteName={'Home'}>
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
