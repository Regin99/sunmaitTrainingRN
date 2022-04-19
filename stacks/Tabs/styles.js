import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/styleConstans';

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
  tabBar: {
    height: 80,
    justifyContent: 'space-between',
    paddingTop: SIZES.ms,
    paddingBottom: SIZES.ms,
  },
  tabBarLabel: {
    fontSize: SIZES.ms,
    fontWeight: 'bold',
  },
});

export default styles;
