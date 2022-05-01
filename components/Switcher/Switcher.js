import React, {useRef, useState} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
} from 'react-native';

import styles from './styles';

const Switcher = ({value, onValueChange}) => {
  const switchAnimation = useRef(new Animated.Value(Number(value))).current;
  const [disabled, setDisabled] = useState(false);

  const animationStyles = StyleSheet.create({
    switch: {
      transform: [
        {
          translateX: switchAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 20],
          }),
        },
      ],
    },
  });

  const animateSwitch = () => {
    setDisabled(true);
    const newValue = Number(!value);
    Animated.timing(switchAnimation, {
      toValue: newValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setDisabled(false));
  };

  const handlePress = () => {
    Vibration.vibrate(50);
    animateSwitch();
    onValueChange(!value);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.switchContainer,
        value ? styles.switchContainerOn : styles.switchContainerOff,
      ]}>
      <Animated.View style={animationStyles.switch}>
        <View
          style={[
            styles.switchInner,
            value ? styles.switchOn : styles.switchOff,
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Switcher;
