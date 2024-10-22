import { fonts } from '../../assets';
import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  backTextStyle: {
    fontFamily: fonts.Medium,
    fontSize: moderateScale(15),
    color: Colors.black,
    marginLeft: verticalScale(8),
  },
  btnContainerStyle: {
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
});
