import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: 64,
    height: 64,
    borderRadius: 100,
    margin: 8,
    borderWidth: 6,
    borderTopColor: COLORS.blue,
    borderRightColor: COLORS.transperent,
    borderBottomColor: COLORS.blue,
    borderLeftColor: COLORS.transperent,
  },
  themed: {
    light: {
      backgroundColor: COLORS.white,
    },
    dark: {
      backgroundColor: COLORS.lightBlack,
    },
  },
});
export default styles;
