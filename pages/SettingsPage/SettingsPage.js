import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';

import ThemeContext from '../../Contexts/ThemeContext';
import styles from './styles';

const SettingsPage = () => {
  const {theme, isDark, setIsDark} = useContext(ThemeContext);

  return (
    <View style={[styles.container, styles.containerThemed[theme]]}>
      <Text style={[styles.label]}>GENERAL</Text>
      <View style={[styles.itemContainerThemed[theme], styles.itemContainer]}>
        <View style={styles.switch}>
          <Text style={[styles.textThemed[theme], styles.text]}>
            Allow Push Notifications
          </Text>
          <Switch />
        </View>
        <View style={styles.switch}>
          <Text style={[styles.textThemed[theme], styles.text]}>
            Dark Theme
          </Text>
          <Switch value={isDark} onValueChange={setIsDark} />
        </View>
        <View style={styles.switch}>
          <Text style={[styles.textThemed[theme], styles.text]}>
            Enable Face ID/Touch ID
          </Text>
          <Switch />
        </View>
      </View>
      <View style={[styles.itemContainerThemed[theme], styles.itemContainer]}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={[styles.saveText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsPage;
