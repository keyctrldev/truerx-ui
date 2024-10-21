import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  agreementTextStyle: {
    fontSize: moderateScale(26),
    color: Colors.black,
    fontWeight: 'bold',
    marginBottom: horizontalScale(12),
  },
  expandedBtnContainer: {
    padding: horizontalScale(12),
    borderWidth: horizontalScale(1),
    borderColor: Colors.overlayDark,
  },
  btnTitleText: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: Colors.black,
  },
  subTitleText: {
    fontSize: moderateScale(12),
    color: Colors.black,
  },
  declineBtnContainer: {
    width: '50%',
    backgroundColor: Colors.overlayDark,
    borderBottomLeftRadius: horizontalScale(10),
  },
  acceptBtnContainer: {
    width: '50%',
    backgroundColor: Colors.primaryBtnBackground,
    borderBottomRightRadius: horizontalScale(10),
  },
  scrollableContentContainer: {
    height: verticalScale(450),
    overflow: 'hidden',
    marginTop: horizontalScale(10),
  },
  topContainerStyle: {
    borderTopStartRadius: horizontalScale(10),
    borderTopEndRadius: horizontalScale(10),
  },
  expandedContainer: {
    backgroundColor: Colors.white,
  },
  closeContainer: {
    backgroundColor: Colors.secondaryBackground,
  },
  downIconStyle: {
    transform: [{ rotate: '180deg' }],
  },
  upIconStyle: {
    transform: [{ rotate: '0deg' }],
  },
  declineBtnText: {
    color: Colors.black,
  },
});
