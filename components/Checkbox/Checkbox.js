import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Checkbox = ({onPress, isChecked, type = 'square'}) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, styles[type], isChecked && styles.checked]}
      onPress={onPress}>
      <View style={styles.checkboxInner} />
    </TouchableOpacity>
  );
};

export default Checkbox;
