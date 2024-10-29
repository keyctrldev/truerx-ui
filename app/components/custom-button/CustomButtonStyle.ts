import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';
import { gilroy } from '../../assets';

export const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignItems: 'center',
    padding: verticalScale(12),
    borderWidth: verticalScale(1),
    borderRadius: verticalScale(50),
  },
  titleTextStyle: {
    maxWidth: '82%',
    fontFamily: gilroy.Medium,
    fontSize: moderateScale(16),
  },
  primaryBtnContainer: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  secondaryBtnContainer: {
    borderColor: Colors.primary,
    backgroundColor: Colors.transparent,
  },
  primaryBtnTitle: {
    color: Colors.white,
  },
  secondaryBtnTitle: {
    color: Colors.primary,
  },
});
