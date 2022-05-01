import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Switcher from '../../components/Switcher/Switcher';

import {useDispatch, useSelector} from 'react-redux';

import setSettings from '../../redux/actions/settingsActions';

import styles from './styles';

const Settings = () => {
  const {theme, touchId, notifications} = useSelector(state => state.settings);
  const dispatch = useDispatch();

  const switchNotifications = () =>
    dispatch(setSettings({notifications: !notifications}));

  const switchDarkTheme = () =>
    dispatch(setSettings({theme: theme === 'light' ? 'dark' : 'light'}));

  const switchTouchId = () => dispatch(setSettings({touchId: !touchId}));

  return (
    <View style={[styles.container, styles.containerThemed[theme]]}>
      <Text style={[styles.label]}>GENERAL</Text>
      <View style={[styles.itemThemed[theme], styles.itemContainer]}>
        <View style={styles.switch}>
          <Text style={[styles.itemThemed[theme], styles.text]}>
            Allow Push Notifications
          </Text>
          <Switcher value={notifications} onValueChange={switchNotifications} />
        </View>
        <View style={styles.switch}>
          <Text style={[styles.itemThemed[theme], styles.text]}>
            Dark Theme
          </Text>
          <Switcher onValueChange={switchDarkTheme} value={theme === 'dark'} />
        </View>
        <View style={styles.switch}>
          <Text style={[styles.itemThemed[theme], styles.text]}>
            Enable Face ID/Touch ID
          </Text>
          <Switcher value={touchId} onValueChange={switchTouchId} />
        </View>
      </View>
      <View style={[styles.itemThemed[theme], styles.itemContainer]}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={[styles.saveText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
