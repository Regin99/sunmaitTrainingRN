import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '85%',
    height: '80%',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  scrollView: {
    padding: 20,
  },
  closeButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1C00FF',
    padding: 10,
    marginBottom: 25,
  },
  closeButtonText: {
    color: '#1C00FF',
  },
});
export default styles;
