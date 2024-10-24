import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: Colors.indigo,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(20),
    borderRadius: moderateScale(10),
  },
  headingText: {
    color: Colors.white,
    fontSize: moderateScale(22),
    marginVertical: verticalScale(16),
    fontWeight: '700',
  },
  button: {
    width: '100%',
    borderRadius: moderateScale(25),
    backgroundColor: Colors.primary,
  },
});
