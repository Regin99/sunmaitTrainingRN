import React, {useRef, useState} from 'react';
import {
  TouchableOpacity,
  Animated,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import styles from './styles';

const AnimatedButton = ({text, onPress}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  const [isTextVisiable, setIsTextVisiable] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const animationStyles = StyleSheet.create({
    changeWidth: {
      width: scaleAnim.interpolate({
        inputRange: [0, 0.5, 0.7, 0.9, 1],
        outputRange: [200, 40, 180, 150, 200],
      }),
    },
  });

  const handlePress = () => {
    onPress && onPress();
    setDisabled(true);
    setIsTextVisiable(false);
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: false,
    }).start(() => {
      setIsTextVisiable(true);
      setDisabled(false);
      scaleAnim.setValue(0);
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled}>
      <Animated.View style={[styles.container, animationStyles.changeWidth]}>
        {isTextVisiable ? (
          <Text style={styles.text}>{text}</Text>
        ) : (
          <Image
            source={require('../../assets/loading.gif')}
            style={styles.circle}
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AnimatedButton;
