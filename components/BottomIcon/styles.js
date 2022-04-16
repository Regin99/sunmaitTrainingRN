import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styleConstans';

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  avatar: {
    borderRadius: 50,
  },
  avatarActive: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.black,
  },
});
export default styles;
