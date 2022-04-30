import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
