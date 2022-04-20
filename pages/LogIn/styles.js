import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themed: {
    light: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
    },
    dark: {
      backgroundColor: COLORS.lightBlack,
      color: COLORS.white,
    },
  },
  inputContainer: {
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: SIZES.l,
  },
  emailInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
    padding: SIZES.ms,
  },
  passwordInput: {
    padding: SIZES.ms,
    maxWidth: '80%',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    maxWidth: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    borderRadius: SIZES.ms,
  },
  signUpButton: {
    backgroundColor: COLORS.blue,
    padding: SIZES.ms,
  },
  logInButton: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    padding: SIZES.ms,
  },
  signUpButtonText: {
    color: COLORS.white,
  },
  logInButtonText: {
    color: COLORS.blue,
  },
  disabled: {
    borderColor: COLORS.grey,
    color: COLORS.grey,
  },
});
export default styles;
