import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  View,
  TextInput,
} from 'react-native';
import styles from './styles';

import TextInputMask from 'react-native-text-input-mask';

import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import Checkbox from '../../components/Checkbox/Checkbox';
import Loader from '../../components/Loader/Loader';
import ModalError from '../../components/ModalError/ModalError';

import HiddenIcon from '../../assets/HiddenIcon';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {signUpActions} from '../../redux/actions/signUpActions';

import PAGES from '../pages';
import {COLORS} from '../../constants/styleConstans';

const {signUpRequest} = signUpActions;

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
    <Loader />
  ) : (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <UploadPhoto avatar={avatar} setAvatar={setAvatar} />
            <Text>Upload a photo</Text>
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
                <HiddenIcon
                  width={30}
                  height={30}
                  fill={isPasswordSecure ? COLORS.black : COLORS.blue}
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
export default SignUpPage;
