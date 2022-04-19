import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

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
    borderBottomColor: COLORS.grey,
    padding: 10,
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    maxWidth: '100%',
  },
  passwordInput: {
    marginBottom: 10,
    padding: 10,
    maxWidth: '80%',
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
    color: COLORS.blue,
  },

  button: {
    width: '20%',
    height: '5%',
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
  buttonInactive: {
    backgroundColor: COLORS.white,
  },
  buttonActive: {
    backgroundColor: COLORS.blue,
    color: COLORS.grey,
  },
  buttonText: {
    color: COLORS.grey,
  },
});
export default styles;
