import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  modal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.semiTransperent,
  },
  modalContent: {
    backgroundColor: COLORS.white,
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
