import {StyleSheet} from 'react-native';
import {colors, sizes, fonts} from '../../constants/styleConstans';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  centeredContainer: {
    marginTop: sizes.l,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerThemed: {
    light: {
      backgroundColor: colors.white,
      color: colors.black,
    },
    dark: {
      backgroundColor: colors.darkGrey,
      color: colors.white,
    },
  },
  button: {
    flexDirection: 'row',
    padding: sizes.s,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.Raleway,
    fontSize: sizes.m,
  },
  textThemed: {
    light: {
      color: colors.black,
      backgroundColor: colors.white,
    },
    dark: {
      color: colors.white,
      backgroundColor: colors.darkGrey,
    },
  },
  email: {
    marginTop: sizes.l,
  },
  buttonText: {
    fontFamily: fonts.Raleway,
    marginLeft: sizes.m,
  },
  buttonTextThemed: {
    light: {
      color: colors.black,
    },
    dark: {
      color: colors.white,
    },
  },
  logOutButton: {
    alignItems: 'center',
    padding: sizes.s,
    marginBottom: sizes.l,
  },
});
export default styles;
