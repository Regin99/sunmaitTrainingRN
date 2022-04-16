import {StyleSheet} from 'react-native';

import {COLORS, SIZES, FONTS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  centeredContainer: {
    marginTop: SIZES.l,
    justifyContent: 'center',
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
  button: {
    flexDirection: 'row',
    padding: SIZES.s,
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.Raleway,
    fontSize: SIZES.m,
  },
  textThemed: {
    light: {
      color: COLORS.black,
      backgroundColor: COLORS.white,
    },
    dark: {
      color: COLORS.white,
      backgroundColor: COLORS.darkGrey,
    },
  },
  email: {
    marginTop: SIZES.l,
  },
  buttonText: {
    fontFamily: FONTS.Raleway,
    marginLeft: SIZES.m,
  },
  buttonTextThemed: {
    light: {
      color: COLORS.black,
    },
    dark: {
      color: COLORS.white,
    },
  },
  logOutButton: {
    alignItems: 'center',
    padding: SIZES.s,
    marginBottom: SIZES.l,
  },
});
export default styles;
