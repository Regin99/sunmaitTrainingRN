import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowIcon from '../../assets/ArrowIcon';

const BackArrow = ({size, color, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <ArrowIcon size={size} fill={color} />
  </TouchableOpacity>
);

export default BackArrow;
