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
    width: 30,
    height: 30,
  },
});

export default styles;
