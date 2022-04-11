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
import {signUpActions} from '../../redux/actions/signUpActions';
import {loginActions} from '../../redux/actions/logInActions';
import Loader from '../../components/Loader/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {signUpRequest} = signUpActions;
const {logInRequest} = loginActions;

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

  const {isLoggIn, loginError} = useSelector(state => state.logIn);
  const {isSignUp, signError} = useSelector(state => state.signUp);
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

  const nextAlert = userData => {
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
          dispatch(signUpRequest(userData));
          setIsLogInShown(false);
          setIsRegisterShown(true);
        },
      },
      {
        text: 'Log in',
        onPress: () => {
          handleSubmit();
          dispatch(logInRequest(userData));
          setIsRegisterShown(false);
          setIsLogInShown(true);
          // AsyncStorage.clear();
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
          const userData = {
            number: numberValue,
            email: emailValue,
            password: passwordValue,
            avatar: avatarValue,
          };
          nextAlert(userData);
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
                    {isSignUp ? 'Successfully registered!' : 'Error'}
                  </Text>
                  <Text style={styles.modalText}>{signError}</Text>
                </>
              ) : null}
              {isLogInShown ? (
                <>
                  <Text style={styles.modalText}>
                    {isLoggIn ? 'Logged in!' : 'Error'}
                  </Text>
                  <Text style={styles.modalText}>{loginError}</Text>
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
