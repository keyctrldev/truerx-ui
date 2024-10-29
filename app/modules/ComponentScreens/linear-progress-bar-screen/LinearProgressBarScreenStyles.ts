import { StyleSheet } from 'react-native';

import { gilroy } from '../../../assets';
import { Colors, moderateScale, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  progressBarScreenContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rowBtnContainer: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: verticalScale(10),
  },
  buttonContainer: {
    alignItems: 'center',
    padding: verticalScale(10),
    borderRadius: verticalScale(10),
    backgroundColor: Colors.lightSlateGray,
  },
  decreaseBtnContainer: {
    backgroundColor: Colors.primary,
  },
  btnTextStyle: {
    color: Colors.white,
    fontFamily: gilroy.Medium,
    fontSize: moderateScale(16),
  },
});
