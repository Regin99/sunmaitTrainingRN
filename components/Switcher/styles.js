import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    height: 15,
    width: 30,
    borderRadius: 100,
    //default position:relative
  },

  switchInner: {
    position: 'absolute',
    top: -2.5,
    left: -5,
    borderRadius: 100,
    width: 20,
    height: 20,

    //shadow
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  switchOn: {
    backgroundColor: COLORS.blue,
  },
  switchOff: {
    backgroundColor: COLORS.lightGrey,
  },
  switchContainerOn: {
    backgroundColor: COLORS.semiTransperentBlue,
  },
  switchContainerOff: {
    backgroundColor: COLORS.semiTransperent,
  },
});

export default styles;
