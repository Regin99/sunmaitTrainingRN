import {StyleSheet} from 'react-native';

import {COLORS, SIZES, FONTS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerThemed: {
    light: {
      backgroundColor: COLORS.lightGrey,
    },
    dark: {
      backgroundColor: COLORS.darkGrey,
    },
  },
  text: {
    fontFamily: FONTS.Raleway,
    fontSize: SIZES.m,
  },
  done: {
    color: COLORS.blue,
  },
  itemThemed: {
    light: {
      color: COLORS.black,
      backgroundColor: COLORS.white,
    },
    dark: {
      color: COLORS.white,
      backgroundColor: COLORS.lightBlack,
    },
  },
  inputContainer: {
    flexDirection: 'row',
    padding: SIZES.s,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: FONTS.Raleway,
    fontSize: SIZES.m,
    padding: SIZES.s,
    marginTop: SIZES.m,
    color: COLORS.grey,
  },
  itemContainer: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: SIZES.xl,
  },
});

export default styles;
