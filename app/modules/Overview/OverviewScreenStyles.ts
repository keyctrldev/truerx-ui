import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import { fonts } from '../../assets';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },
  btnContainer: {
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(9),
    margin: verticalScale(5),
    borderRadius: verticalScale(8),
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(16),
    color: Colors.black,
  },
  listViewContainer: {
    margin: verticalScale(10),
  },
});
