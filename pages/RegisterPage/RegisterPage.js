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
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUpRequest} from '../../redux/actions/signUpActions';
import {logInRequest} from '../../redux/actions/logInActions';
import Loader from '../../components/Loader/Loader';

const RegisterPage = () => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [numberValue, setNumberValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [rePasswordValue, setRePasswordValue] = useState('');
  const [avatarValue, setAvatarValue] = useState({
    uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png',
  });

  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const [isLogInShown, setIsLogInShown] = useState(false);

  const dispatch = useDispatch();

  const isLoggIn = useSelector(state => state.logIn);
  const isSignUp = useSelector(state => state.signUp);
  const isLoading = useSelector(
    state => state.signUp.isLoading || state.logIn.isLoading,
  );

  const handleSubmit = () => {
    setEmailValue('');
    setNumberValue('');
    setPasswordValue('');
    setRePasswordValue('');
    setAvatarValue({
      uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png',
    });
    setIsModalVisible(!isModalVisible);
  };

  const nextAlert = (email, number, password, avatar) => {
    Alert.alert('Are you sure?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Register',
        onPress: () => {
          handleSubmit();
          dispatch(signUpRequest(email, number, password, avatar));
          setIsLogInShown(false);
          setIsRegisterShown(true);
        },
      },
      {
        text: 'Log in',
        onPress: () => {
          handleSubmit();
          dispatch(logInRequest(email, password));
          setIsRegisterShown(false);
          setIsLogInShown(true);
        },
      },
    ]);
  };

  const formProps = {
    avatarValue,
    setAvatarValue,
    numberValue,
    setNumberValue,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    rePasswordValue,
    setRePasswordValue,
    isNextButtonDisabled,
    setIsNextButtonDisabled,
  };

  return isLoading ? (
    <Loader />
  ) : (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Form {...formProps} />
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.button,
          isNextButtonDisabled ? styles.buttonInactive : styles.buttonActive,
        ]}
        onPress={() => {
          nextAlert(emailValue, numberValue, passwordValue, avatarValue);
        }}
        disabled={isNextButtonDisabled}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
              {isRegisterShown ? (
                <>
                  <Text style={styles.modalText}>
                    {isSignUp.isSignUp ? 'Successfully registered!' : 'Error'}
                  </Text>
                  <Text style={styles.modalText}>{isSignUp.error}</Text>
                </>
              ) : null}
              {isLogInShown ? (
                <>
                  <Text style={styles.modalText}>
                    {isLoggIn.isLoggIn ? 'Logged in!' : 'Error'}
                  </Text>
                  <Text style={styles.modalText}>{isLoggIn.error}</Text>
                </>
              ) : null}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    marginBottom: 30,
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

export default RegisterPage;
