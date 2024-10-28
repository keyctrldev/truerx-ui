import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: Colors.indigo,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(2),
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(18),
    borderRadius: moderateScale(10),
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    top: moderateScale(5),
    bottom: moderateScale(5),
    paddingHorizontal: moderateScale(6),
    gap: moderateScale(18),
  },
  headingText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: moderateScale(20),
    paddingTop: moderateScale(10),
  },
  savingsButton: {
    borderRadius: moderateScale(25),
  },
});
