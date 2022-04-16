import {StyleSheet} from 'react-native';
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
export default styles;
