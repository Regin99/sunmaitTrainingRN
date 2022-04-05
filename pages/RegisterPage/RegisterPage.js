/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Form from '../../components/Form/Form';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';

const nextAlert = () =>
  Alert.alert('Are you sure?', '', [
    {
      text: 'No',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'Yes', onPress: () => console.log('OK Pressed')},
  ]);

const RegisterPage = () => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Form setIsNextButtonDisabled={setIsNextButtonDisabled} />
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.button,
          isNextButtonDisabled ? styles.buttonInactive : styles.buttonActive,
        ]}
        onPress={() => {
          nextAlert();
        }}
        disabled={isNextButtonDisabled}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  button: {
    width: '20%',
    height: '5%',

    borderWidth: 1,
    borderColor: '#1C00FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 10,
  },
  buttonInactive: {
    backgroundColor: '#f2f2f2',
  },
  buttonActive: {
    backgroundColor: '#1C00FF',
    color: '#ccc',
  },
  buttonText: {
    color: '#ccc',
  },
});

export default RegisterPage;
