import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowIcon from '../../assets/ArrowIcon';

const BackArrow = ({size, color, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <ArrowIcon
      width={size}
      height={size}
      fill={color}
      style={{transform: [{rotateY: '180deg'}]}}
    />
  </TouchableOpacity>
);

export default BackArrow;
