import {StyleSheet} from 'react-native';
import {colors, sizes, fonts} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerThemed: {
    light: {
      backgroundColor: colors.lightGrey,
      color: colors.black,
    },
    dark: {
      backgroundColor: colors.darkGrey,
      color: colors.white,
    },
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
      backgroundColor: colors.lightBlack,
    },
  },
  inputContainer: {
    flexDirection: 'row',
    padding: sizes.s,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.Raleway,
    fontSize: sizes.m,
    padding: sizes.s,
    marginTop: sizes.m,
    color: colors.grey,
  },
  itemContainer: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: sizes.xl,
  },

  itemContainerThemed: {
    light: {
      backgroundColor: colors.white,
    },
    dark: {
      backgroundColor: colors.lightBlack,
    },
  },
});

export default styles;
