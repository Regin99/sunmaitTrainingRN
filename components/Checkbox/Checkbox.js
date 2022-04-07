/* eslint-disable prettier/prettier */
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';

const Checkbox = ({onPress, isChecked, type = 'square'}) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, styles[type], isChecked && styles.checked]}
      onPress={onPress}>
      <View style={styles.checkboxInner} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: '#1C00FF',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  circle: {
    borderRadius: 50,
  },
  square: {
    borderRadius: 2,
  },
  checked: {
    backgroundColor: '#1C00FF',
  },
  checkboxInner: {
    width: 9,
    height: 9,
    borderWidth: 2,
    borderColor: '#fff',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 7,
    boxSizing: 'border-box',
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    top: -1,
    left: 0,
  },
});

export default Checkbox;
