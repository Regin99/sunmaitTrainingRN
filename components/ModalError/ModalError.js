import React from 'react';
import {Text, View, Modal, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const ModalError = ({error, isModalVisible, setIsModalVisible}) => {
  return (
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
          <View style={styles.modalContent}>
            <>
              <Text style={styles.modalText}>Error</Text>
              <Text style={styles.modalText}>{error?.message}</Text>
            </>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalError;
