import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: Colors.indigo,
    alignItems: 'center',
    marginHorizontal: horizontalScale(10),
    borderRadius: moderateScale(10),
  },
  imageBackgroundContainer: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: horizontalScale(16),
  },
  headingText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: moderateScale(20),
  },
  savingsButton: {
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(9),
  },
});
