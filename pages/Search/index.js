import React, {useEffect, useRef} from 'react';
import {View, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const Search = ({navigation, route}) => {
  const searchInput = useRef(null);
  const {theme} = useSelector(state => state.settings);

  useEffect(() => {
    if (route.params?.searchFocus) {
      searchInput.current.focus();
    }
  }, [route, navigation]);

  return (
    <View style={[styles.container, styles.containerThemed[theme]]}>
      <TextInput ref={searchInput} style={styles.search} placeholder="Search" />
    </View>
  );
};

export default Search;
