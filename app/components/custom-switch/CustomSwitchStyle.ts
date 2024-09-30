import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: horizontalScale(50),
    height: verticalScale(28),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    backgroundColor: '#F2F5F7',
  },
  circle: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(30),
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(2.5),
    elevation: moderateScale(4),
    position: 'absolute',
  },
});
