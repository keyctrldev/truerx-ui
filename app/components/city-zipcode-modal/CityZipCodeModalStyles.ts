import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';
import { fonts } from '../../assets';

export const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: verticalScale(18),
    backgroundColor: Colors.white,
    borderRadius: verticalScale(8),
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: moderateScale(18),
    fontFamily: fonts.SemiBold,
    color: Colors.black,
  },
  buttonStyle: {
    width: '85%',
    borderRadius: verticalScale(50),
    backgroundColor: Colors.primary,
    marginBottom: verticalScale(10),
  },
  cancelTextStyle: {
    fontSize: moderateScale(13),
    color: Colors.primary,
  },
  cancelBtnContainer: {
    backgroundColor: Colors.transparent,
  },
  textInputContainerStyle: {
    borderWidth: verticalScale(1),
    borderColor: Colors.overlayDark,
    borderRadius: verticalScale(6),
    paddingVertical: verticalScale(14),
    color: Colors.black,
  },
});
