import { Platform, StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';
import { gilroy } from '../../assets';

export const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: verticalScale(18),
    backgroundColor: Colors.white,
    borderRadius: verticalScale(8),
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: moderateScale(18),
    fontFamily: gilroy.SemiBold,
    color: Colors.black,
    paddingVertical: verticalScale(5),
  },
  buttonStyle: {
    width: '92%',
    borderRadius: verticalScale(50),
    backgroundColor: Colors.primary,
  },
  cancelTextStyle: {
    fontSize: moderateScale(13),
    color: Colors.primary,
  },
  cancelBtnContainer: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
    marginTop: verticalScale(10),
  },
  textInputContainerStyle: {
    borderWidth: verticalScale(1),
    borderColor: Colors.overlayDark,
    borderRadius: verticalScale(6),
    paddingVertical: Platform.OS == 'android' ? verticalScale(10) : verticalScale(14),
    color: Colors.black,
  },
  textInputContentContainerStyle: {
    width: '92%',
  },
});
