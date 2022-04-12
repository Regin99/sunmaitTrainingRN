import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const UploadPhoto = ({avatarValue, setAvatarValue}) => {
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
      setAvatarValue({uri: response.assets[0].uri});
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
      <Image style={styles.avatarIcon} source={avatarValue} />
      <Text>Upload a photo</Text>
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

const styles = StyleSheet.create({
  avatarIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalButton: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  uploadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  cancelOpacity: {
    height: '100%',
    width: '100%',
  },
});

export default UploadPhoto;
