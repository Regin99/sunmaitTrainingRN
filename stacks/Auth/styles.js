import {StyleSheet} from 'react-native';
import {SIZES, COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    fontSize: SIZES.l,
  },
  themed: {
    light: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
    },
    dark: {
      backgroundColor: COLORS.lightBlack,
      color: COLORS.white,
    },
  },
});

export default styles;
