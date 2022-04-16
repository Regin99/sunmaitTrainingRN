import React, {useRef, useEffect} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import styles from './styles';

const Loader = () => {
  const spiningAnim = useRef(new Animated.Value(0)).current;

  const spining = StyleSheet.create({
    //
    spin: {
      transform: [
        {
          rotate: spiningAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['90deg', '450deg'],
          }),
        },
      ],
    },
  });

  const spin = () => {
    Animated.loop(
      Animated.timing(spiningAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  };

  useEffect(() => {
    spin();
    return () => {
      spiningAnim.stopAnimation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[styles.container, spining.spin]}>
      <View style={styles.loader} />
    </Animated.View>
  );
};

export default Loader;
