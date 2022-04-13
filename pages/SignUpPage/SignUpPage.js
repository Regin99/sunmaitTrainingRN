import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  View,
  Image,
  TextInput,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import Checkbox from '../../components/Checkbox/Checkbox';
import Loader from '../../components/Loader/Loader';
import ModalError from '../../components/ModalError/ModalError';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {signUpActions} from '../../redux/actions/signUpActions';

import PAGES from '../pages';

const {signUpRequest} = signUpActions;

const icons = {
  secured: {
    uri: 'https://cdn-icons.flaticon.com/png/512/2767/premium/2767194.png?token=exp=1649726743~hmac=6fa54ef21299d84f97bb9f800db5809f',
  },
  unsecured: {
    uri: 'https://cdn-icons-png.flaticon.com/512/159/159604.png',
  },
};

const SignUpPage = ({navigation}) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [avatar, setAvatar] = useState({
    uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isRePasswordValid, setIsRePasswordValid] = useState(false);

  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const dispatch = useDispatch();
  const {error, isLoading} = useSelector(state => state.auth);

  const validate = (type, value) => {
    switch (type) {
      case 'email':
        const expression = /\S+@\S+\.\S+/;
        if (expression.test(String(value).toLowerCase())) {
          setIsEmailValid(true);
          return numberRef.current.focus();
        } else {
          setIsEmailValid(false);
          Alert.alert('Invalid email', 'Please enter a valid email', [
            {
              text: 'OK',
              onPress: () => emailRef.current.focus(),
            },
          ]);
        }
        break;
      case 'number':
        if (value.length === 19) {
          setIsNumberValid(true);
          return passwordRef.current.focus();
        } else {
          setIsNumberValid(false);
          Alert.alert('Invalid number', 'Please enter a valid number', [
            {
              text: 'OK',
              onPress: () => numberRef.current.focus(),
            },
          ]);
        }
        break;
      case 'password':
        if (value.length >= 6) {
          setIsPasswordValid(true);
          return rePasswordRef.current.focus();
        } else {
          setIsPasswordValid(false);
          Alert.alert('Invalid password', 'Password must be 6 or more symbols');
        }
        break;
      case 'rePassword':
        if (value !== password) {
          setIsRePasswordValid(false);
          Alert.alert('Invalid password', 'Passwords do not match');
        } else {
          setIsRePasswordValid(true);
          return rePasswordRef.current.blur();
        }
        break;
    }
  };
  const handleSubmit = () => {
    setEmail('');
    setNumber('');
    setPassword('');
    setRePassword('');
    setAvatar({
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
        },
      },
    ]);
  };

  useEffect(() => {
    if (
      isEmailValid &&
      isNumberValid &&
      isPasswordValid &&
      isRePasswordValid &&
      isChecked
    ) {
      setIsNextButtonDisabled(false);
    } else {
      setIsNextButtonDisabled(true);
    }
  }, [
    isEmailValid,
    isNumberValid,
    isPasswordValid,
    isRePasswordValid,
    isChecked,
    setIsNextButtonDisabled,
  ]);

  return isLoading ? (
    <Loader /> //спросить про это
  ) : (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <UploadPhoto avatar={avatar} setAvatar={setAvatar} />
            <TextInput
              style={styles.input}
              value={email}
              ref={emailRef}
              keyboardType="email-address"
              returnKeyType="next"
              placeholder="Enter your email"
              onChangeText={setEmail}
              onSubmitEditing={() => {
                validate('email', email);
              }}
            />
            <TextInputMask
              style={styles.input}
              ref={numberRef}
              keyboardType="phone-pad"
              value={number}
              onChangeText={setNumber}
              returnKeyType="next"
              placeholder="Enter your phone number"
              mask={'+375 ([00]) [000]-[00]-[00]'}
              onSubmitEditing={() => {
                validate('number', number);
              }}
            />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                ref={passwordRef}
                placeholder="Enter your password"
                value={password}
                returnKeyType="next"
                onChangeText={setPassword}
                secureTextEntry={isPasswordSecure}
                onSubmitEditing={() => {
                  validate('password', password);
                }}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                <Image
                  source={isPasswordSecure ? icons.secured : icons.unsecured}
                  style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                ref={rePasswordRef}
                value={rePassword}
                returnKeyType="done"
                placeholder="Repeat your password"
                secureTextEntry={isPasswordSecure}
                onChangeText={setRePassword}
                onSubmitEditing={() => {
                  validate('rePassword', rePassword);
                }}
              />
            </View>
            <View style={styles.privacyContainer}>
              <View style={styles.privacyText}>
                <Text>I accept the </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(PAGES.PRIVACY_MODAL)}>
                  <Text style={styles.underline}>Privacy policy</Text>
                </TouchableOpacity>
              </View>
              <Checkbox
                type="square"
                isChecked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.button,
          isNextButtonDisabled ? styles.buttonInactive : styles.buttonActive,
        ]}
        onPress={() => {
          const userData = {
            email,
            number,
            password,
            avatar,
          };
          nextAlert(userData);
        }}
        disabled={isNextButtonDisabled}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <ModalError
        error={error}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    maxWidth: '100%',
  },
  passwordInput: {
    marginBottom: 10,
    padding: 10,
    maxWidth: '80%',
  },
  iconImage: {
    width: 30,
    height: 30,
  },

  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
  },
  privacyText: {
    flexDirection: 'row',
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#00a680',
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
    alignSelf: 'center',
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

export default SignUpPage;
