import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  mainContainerStyle: {
    padding: verticalScale(18),
    borderRadius: verticalScale(8),
    backgroundColor: Colors.primary,
  },
  titleTextStyle: {
    color: Colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(16),
  },
  planDetailsContainer: {
    paddingTop: verticalScale(20),
  },
  subTitleText: {
    color: Colors.white,
    fontFamily: fonts.Medium,
    fontSize: moderateScale(14),
  },
  amountTextStyle: {
    color: Colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(22),
    maxWidth: verticalScale(100),
    paddingVertical: verticalScale(4),
  },
  remainingTextStyle: {
    color: Colors.white,
    fontFamily: fonts.Bold,
    fontSize: moderateScale(12),
    paddingLeft: verticalScale(5),
  },
  renderAmountDetailsContainer: {
    flex: 1,
  },
  deducibleContainer: {
    backgroundColor: Colors.white,
  },
  deducibleTextStyle: {
    color: Colors.black,
  },
});
