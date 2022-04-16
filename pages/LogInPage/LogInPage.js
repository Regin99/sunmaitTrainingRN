import React, {useState, useRef, useEffect} from 'react';
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

import Loader from '../../components/Loader/Loader';
import ModalError from '../../components/ModalError/ModalError';

import {useDispatch} from 'react-redux';
import {loginActions} from '../../redux/actions/logInActions';
import {useSelector} from 'react-redux';

import PAGES from '../pages';

import HiddenIcon from '../../assets/HiddenIcon';

import {COLORS} from '../../constants/styleConstans';

const {logInRequest} = loginActions;

const LogInPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {isLoading, error} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
    <View style={styles.container}>
      <Text>Login to App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          style={styles.emailInput}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isPasswordSecure}
            returnKeyType="done"
            style={styles.passwordInput}
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

export default LogInPage;
