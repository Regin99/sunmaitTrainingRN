/* eslint-disable prettier/prettier */
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

const UploadPhoto = () => {
  const [imageSource, setImageSource] = useState({
    uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png',
  });
  const [modalVisible, setModalVisible] = useState(false);

  const selectImage = option => {
    switch (option) {
      case 'camera':
        launchCamera({}, response => {
          setModalVisible(!modalVisible);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setImageSource({uri: response.assets[0].uri});
          }
        });
        break;
      case 'gallery':
        launchImageLibrary({}, response => {
          setModalVisible(!modalVisible);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setImageSource({uri: response.assets[0].uri});
          }
        });
        break;

      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      style={styles.uploadContainer}
      onPress={() => {
        setModalVisible(!modalVisible);
      }}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        style={styles.modal}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback
          style={styles.cancelOpacity}
          onPress={() => {
            setModalVisible(!modalVisible);
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

      <Image style={styles.avatarIcon} source={imageSource} />
      <Text>Upload a photo</Text>
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
