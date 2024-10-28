import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  profileIconStyles: {
    resizeMode: 'contain',
    height: verticalScale(32),
    width: horizontalScale(32),
    borderRadius: moderateScale(50),
    marginLeft: horizontalScale(-5),
  },
  fallbackIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(32),
    width: horizontalScale(32),
    marginLeft: horizontalScale(-5),
    borderRadius: moderateScale(50),
    backgroundColor: Colors.darkCyan,
  },
  fallbackText: {
    color: Colors.darkGreen,
  },
  firstIconStyle: {
    marginLeft: verticalScale(0),
  },
});
