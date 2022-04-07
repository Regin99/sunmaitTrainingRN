/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import UploadPhoto from '../UploadPhoto/UploadPhoto';
import Checkbox from '../Checkbox/Checkbox';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

const Form = ({setIsNextButtonDisabled}) => {
  const [numberValue, setNumberValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [rePasswordValue, setRePasswordValue] = useState('');
  const [avatar, setAvatar] = useState({
    uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png',
  });

  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);

  const [isChecked, setIsChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isRePasswordValid, setIsRePasswordValid] = useState(false);

  const [showButton, setShowButton] = useState(true);

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
              onPress: () => {
                return emailRef.current.focus();
              },
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
              onPress: () => {
                return numberRef.current.focus();
              },
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
        if (value !== passwordValue) {
          setIsRePasswordValid(false);
          Alert.alert('Invalid password', 'Passwords do not match');
        } else {
          setIsRePasswordValid(true);
          return rePasswordRef.current.blur();
        }
        break;
    }
  };

  return (
    <View style={styles.form}>
      <UploadPhoto avatar={avatar} setAvatar={setAvatar} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={emailValue}
          ref={emailRef}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Enter your email"
          onChangeText={setEmailValue}
          onBlur={() => {
            validate('email', emailValue);
          }}
        />
        <TextInputMask
          style={styles.input}
          ref={numberRef}
          keyboardType="phone-pad"
          value={numberValue}
          onChangeText={setNumberValue}
          returnKeyType="next"
          placeholder="Enter your phone number"
          mask={'+375 ([00]) [000]-[00]-[00]'}
          onBlur={() => {
            validate('number', numberValue);
          }}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            ref={passwordRef}
            placeholder="Enter your password"
            value={passwordValue}
            returnKeyType="next"
            onChangeText={setPasswordValue}
            secureTextEntry={showButton}
            onBlur={() => {
              validate('password', passwordValue);
            }}
          />
          <TouchableOpacity onPress={() => setShowButton(!showButton)}>
            <Text>{showButton ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            ref={rePasswordRef}
            value={rePasswordValue}
            returnKeyType="done"
            placeholder="Repeat your password"
            secureTextEntry={showButton}
            onChangeText={setRePasswordValue}
            onBlur={() => {
              validate('rePassword', rePasswordValue);
            }}
          />
        </View>
        <View style={styles.privacyPolicyContainer}>
          <Text>
            I accept the <Text style={styles.underline}>Privacy policy</Text>
          </Text>
          <Checkbox
            type="square"
            isChecked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    minHeight: '80%',
    minWidth: '80%',
    marginTop: '15%',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#00a680',
  },
});

export default Form;
