import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowIcon from '../../assets/ArrowIcon';

const BackArrow = ({width, height, color, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <ArrowIcon
      width={width}
      height={height}
      fill={color}
      style={{transform: [{rotateY: '180deg'}]}}
    />
  </TouchableOpacity>
);

export default BackArrow;
