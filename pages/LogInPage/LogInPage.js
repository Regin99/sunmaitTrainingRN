import React, {useState, useRef, useEffect} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import Loader from '../../components/Loader/Loader';
import ModalError from '../../components/ModalError/ModalError';

import {useDispatch} from 'react-redux';
import {loginActions} from '../../redux/actions/logInActions';
import {useSelector} from 'react-redux';

import PAGES from '../pages';

const {logInRequest} = loginActions;

const {SIGN_UP} = PAGES;

const icons = {
  secured: {
    uri: 'https://cdn-icons.flaticon.com/png/512/2767/premium/2767194.png?token=exp=1649726743~hmac=6fa54ef21299d84f97bb9f800db5809f',
  },
  unsecured: {
    uri: 'https://cdn-icons-png.flaticon.com/512/159/159604.png',
  },
};

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
            <Image
              source={isPasswordSecure ? icons.secured : icons.unsecured}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={() => navigation.navigate(SIGN_UP)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  emailInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  passwordInput: {
    padding: 10,
    maxWidth: '80%',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    maxWidth: '100%',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    borderRadius: 10,
  },
  signUpButton: {
    backgroundColor: '#1C00FF',
    padding: 10,
  },
  logInButton: {
    borderWidth: 1,
    borderColor: '#1C00FF',
    padding: 10,
  },
  signUpButtonText: {
    color: '#f2f2f2',
  },
  logInButtonText: {
    color: '#1C00FF',
  },
  disabled: {
    borderColor: '#ccc',
    color: '#ccc',
  },
});

export default LogInPage;
