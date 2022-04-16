import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    minHeight: '30%',
    minWidth: '80%',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelOpacity: {
    height: '100%',
    width: '100%',
  },
});
export default styles;
