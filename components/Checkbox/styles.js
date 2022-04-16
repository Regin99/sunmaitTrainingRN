import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: COLORS.blue,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  circle: {
    borderRadius: 50,
  },
  square: {
    borderRadius: 2,
  },
  checked: {
    backgroundColor: COLORS.blue,
  },
  checkboxInner: {
    width: 9,
    height: 9,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 7,
    boxSizing: 'border-box',
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    top: -1,
    left: 0,
  },
});
export default styles;
