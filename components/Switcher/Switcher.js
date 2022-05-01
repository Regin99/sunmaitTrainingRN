import React, {useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
} from 'react-native';

import styles from './styles';

const Switcher = ({value, onValueChange}) => {
  //is Number(value) normal practice?
  const switchAnimation = useRef(new Animated.Value(Number(value))).current;

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
    value
      ? Animated.timing(switchAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start()
      : Animated.timing(switchAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
  };

  const handlePress = () => {
    //idk how to test vibration on emulator, but on pet-expo project, it works
    Vibration.vibrate(50);
    animateSwitch();
    onValueChange(!value);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
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
