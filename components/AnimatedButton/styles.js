import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: COLORS.darkRed,
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  circle: {
    width: 35,
    height: 35,
    borderColor: COLORS.semiTransperentWhite,
    borderWidth: 10,
    borderRadius: 100,
  },
  circleInner: {
    position: 'absolute',
    top: -10,
    left: 3,
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: COLORS.white,
  },
});

export default styles;
