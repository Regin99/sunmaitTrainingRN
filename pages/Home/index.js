import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

import styles from './styles';

const Home = ({navigation}) => {
  const {theme} = useSelector(state => state.settings);

  return (
    <View style={[styles.container, styles.themed[theme]]}>
      <AnimatedButton text="CONTINUE" />
    </View>
  );
};
export default Home;
