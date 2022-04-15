import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

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
              <Text style={styles.modalText}>{error}</Text>
            </>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    minHeight: '30%',
    minWidth: '80%',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelOpacity: {
    height: '100%',
    width: '100%',
  },
});

export default ModalError;
