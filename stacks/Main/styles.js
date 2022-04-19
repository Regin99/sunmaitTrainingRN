import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  themedBG: {
    dark: {
      backgroundColor: COLORS.darkGrey,
    },
    light: {
      backgroundColor: COLORS.white,
    },
  },
  headerTitle: {
    dark: {
      color: COLORS.white,
    },
    light: {
      color: COLORS.black,
    },
  },
});

export default styles;
