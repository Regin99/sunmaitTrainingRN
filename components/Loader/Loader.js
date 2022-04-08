import React, {useRef, useEffect} from 'react';
import {Animated, View, StyleSheet} from 'react-native';

const Loader = () => {
  const spiningAnim = useRef(new Animated.Value(0)).current;

  const spining = StyleSheet.create({
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
    Animated.timing(spiningAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      spiningAnim.setValue(0);
      spin();
    });
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: 64,
    height: 64,
    borderRadius: 100,
    margin: 8,
    borderWidth: 6,
    borderTopColor: '#1C00FF',
    borderRightColor: 'transparent',
    borderBottomColor: '#1C00FF',
    borderLeftColor: 'transparent',
  },
});

export default Loader;
