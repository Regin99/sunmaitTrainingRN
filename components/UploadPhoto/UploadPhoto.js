import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const UploadPhoto = ({avatar, setAvatar}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getImage = response => {
    setIsModalVisible(!isModalVisible);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      setAvatar({uri: response.assets[0].uri});
    }
  };

  const selectImage = option => {
    if (option === 'camera') {
      launchCamera({}, getImage);
    } else {
      launchImageLibrary({}, getImage);
    }
  };

  return (
    <TouchableOpacity
      style={styles.uploadContainer}
      onPress={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <Image style={styles.avatarIcon} source={avatar} />
      <Modal
        visible={isModalVisible}
        animationType="fade"
        style={styles.modal}
        transparent={true}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}>
        <TouchableWithoutFeedback
          style={styles.cancelOpacity}
          onPress={() => {
            setIsModalVisible(!isModalVisible);
          }}>
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                selectImage('camera');
              }}>
              <Text>From camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                selectImage('gallery');
              }}>
              <Text>From gallery</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </TouchableOpacity>
  );
};

export default UploadPhoto;
