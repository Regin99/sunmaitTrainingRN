import React, {useRef, useState} from 'react';
import {TouchableOpacity, Animated, View, StyleSheet, Text} from 'react-native';
import styles from './styles';

const AnimatedButton = ({text, onPress}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const [isTextVisiable, setIsTextVisiable] = useState(true);

  const animationStyles = StyleSheet.create({
    rotate: {
      transform: [
        {
          rotate: rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    },
    //ask about better way, scale with position absolute, or change width
    changeWidth: {
      width: scaleAnim.interpolate({
        inputRange: [0, 0.5, 0.7, 0.9, 1],
        outputRange: [200, 40, 180, 150, 200],
      }),
    },
  });

  const handlePress = () => {
    onPress && onPress();

    setIsTextVisiable(false);

    const animationsArray = [
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: false,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
        //is it a normal practice?????????????????????/
      }).start(() => {
        setIsTextVisiable(true);
      }),
    ];

    Animated.parallel(animationsArray, {
      stopTogether: false,
    }).start(() => {
      scaleAnim.setValue(0);
      rotateAnim.setValue(0);
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View style={[styles.container, animationStyles.changeWidth]}>
        {isTextVisiable ? (
          <Text style={styles.text}>{text}</Text>
        ) : (
          <Animated.View style={[styles.circle, animationStyles.rotate]}>
            <View style={[styles.circleInner]} />
          </Animated.View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AnimatedButton;
