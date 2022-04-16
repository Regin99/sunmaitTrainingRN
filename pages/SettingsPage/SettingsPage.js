import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';

import ThemeContext from '../../Contexts/ThemeContext';
import styles from './styles';

const SettingsPage = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <View style={[styles.container, styles.containerThemed[theme]]}>
      <Text style={[styles.label]}>GENERAL</Text>
      <View style={[styles.itemThemed[theme], styles.itemContainer]}>
        <View style={styles.switch}>
          <Text style={[styles.itemThemed[theme], styles.text]}>
            Allow Push Notifications
          </Text>
          <Switch />
        </View>
        <View style={styles.switch}>
          <Text style={[styles.itemThemed[theme], styles.text]}>
            Dark Theme
          </Text>
          <Switch onValueChange={switchTheme} value={theme === 'dark'} />
        </View>
        <View style={styles.switch}>
          <Text style={[styles.itemThemed[theme], styles.text]}>
            Enable Face ID/Touch ID
          </Text>
          <Switch />
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

export default SettingsPage;
