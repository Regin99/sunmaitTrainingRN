import React, {useRef, useEffect} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';

const Loader = () => {
  const {theme} = useSelector(state => state.settings);

  const spiningAnim = useRef(new Animated.Value(0)).current;

  const animationStyles = StyleSheet.create({
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

  useEffect(() => {
    Animated.loop(
      Animated.timing(spiningAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
    return () => spiningAnim.stopAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.container, styles.themed[theme]]}>
      <Animated.View style={[styles.loader, animationStyles.spin]} />
    </View>
  );
};

export default Loader;
