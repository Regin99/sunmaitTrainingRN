import React, {useState, useRef, useEffect} from 'react';
import {TextInput, TouchableOpacity, Text, View, Alert} from 'react-native';

import Loader from '../../components/Loader/Loader';
import ModalError from '../../components/ModalError/ModalError';

import {useDispatch} from 'react-redux';
import {loginActions} from '../../redux/actions/logInActions';
import {useSelector} from 'react-redux';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import TouchID from 'react-native-touch-id';

import PAGES from '../pages';

import HiddenIcon from '../../assets/HiddenIcon';

import {COLORS} from '../../constants/styleConstans';

import styles from './styles';

const {logInRequest, logInSuccess} = loginActions;

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {isLoading, error} = useSelector(state => state.auth);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  const {touchId, theme} = useSelector(state => state.settings);

  const handleTouchID = () => {
    const creds = auth().currentUser;
    TouchID.authenticate()
      .then(() => {
        const userId = creds.uid;
        firestore()
          .collection('users')
          .doc(userId)
          .get()
          .then(doc => {
            const user = doc.data();
            dispatch(logInSuccess(user));
          });
      })
      .catch(() => {
        Alert.alert('Error', 'You are not logged');
      });
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  return isLoading ? (
    <Loader />
  ) : (
    <View style={[styles.container, styles.themed[theme]]}>
      <Text style={styles.themed[theme]}>Login to App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          style={[styles.emailInput, styles.themed[theme]]}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isPasswordSecure}
            returnKeyType="done"
            style={[styles.passwordInput, styles.themed[theme]]}
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
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={() => navigation.navigate(PAGES.SIGN_UP)}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.logInButton,
            !touchId && styles.disabled,
          ]}
          disabled={!touchId}
          onPress={handleTouchID}>
          <Text
            style={[
              styles.logInButtonText,
              !touchId && styles.disabled,
              styles.themed[theme],
            ]}>
            TouchID
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.logInButton,
            isDisabled && styles.disabled,
          ]}
          disabled={isDisabled}
          onPress={() => {
            setIsModalVisible(!isModalVisible);
            dispatch(logInRequest({email, password}));
          }}>
          <Text style={[styles.logInButtonText, isDisabled && styles.disabled]}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      <ModalError
        error={error}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </View>
  );
};

export default LogIn;
