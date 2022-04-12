import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

const BottomIcon = ({name}) => {
  const icons = {
    home: {uri: 'https://img.icons8.com/ios/344/home--v1.png'},
    'home-outline': {uri: 'https://img.icons8.com/ios-filled/344/home.png'},
    search: {uri: 'https://img.icons8.com/ios/344/search--v1.png'},
    'search-outline': {
      uri: 'https://img.icons8.com/ios-filled/344/search--v1.png',
    },
  };
  const [icon, setIcon] = useState(icons[name]);
  const {avatar} = useSelector(state => state.auth.user);

  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon ? icon : avatar}
        style={[
          styles.iconImage,
          name === 'person-outline'
            ? styles.avatarActive
            : name === 'person'
            ? styles.avatar
            : null,
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  avatar: {
    borderRadius: 50,
  },
  avatarActive: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default BottomIcon;
