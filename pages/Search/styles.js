import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerThemed: {
    light: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
    },
    dark: {
      backgroundColor: COLORS.darkGrey,
      color: COLORS.white,
    },
  },
  search: {
    width: '70%',
    height: 40,
    borderRadius: SIZES.l,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.l,
    marginTop: SIZES.l,
  },
});
export default styles;
