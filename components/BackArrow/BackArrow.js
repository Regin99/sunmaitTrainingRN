import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const BackArrow = ({src, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image source={src} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default BackArrow;
