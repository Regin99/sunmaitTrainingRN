import {TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Checkbox = ({onPress, checked, type = 'square'}) => {
  const [isChecked, setIsChecked] = useState(checked);
  console.log(type);
  return (
    <TouchableOpacity
      style={[styles.checkbox, styles[type]]}
      onPress={() => setIsChecked(!isChecked)}
    />
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
});

export default Checkbox;
