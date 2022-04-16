import {StyleSheet} from 'react-native';
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
export default styles;
