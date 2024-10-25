import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';
import { fonts } from '../../assets';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.secondaryBackground,
  },
  textInputStyle: {
    borderColor: Colors.transparent,
    backgroundColor: Colors.white,
  },
  chatBoxContainer: {
    backgroundColor: Colors.white,
  },
  textInputContainerStyle: {
    width: '75%',
    marginHorizontal: verticalScale(10),
  },
  mediaIconStyle: {
    height: verticalScale(30),
    width: verticalScale(25),
  },
  sendIconStyle: {
    height: verticalScale(32),
    width: verticalScale(32),
  },
  spacerContainer: {
    marginRight: verticalScale(10),
  },
  inputStyle: {
    color: Colors.black,
    fontSize: moderateScale(18),
    fontFamily: fonts.Regular,
    paddingHorizontal: verticalScale(5),
  },
  placeHolderStyle: {
    color: Colors.placeHolderTextColor,
  },
  keyboardAwareViewStyle: {
    flex: 1,
  },
});
