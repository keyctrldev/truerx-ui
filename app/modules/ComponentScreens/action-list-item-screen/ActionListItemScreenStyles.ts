import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../../theme';
import { fonts } from '../../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    backgroundColor: Colors.lightGray,
  },
  heading: {
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
    padding: moderateScale(10),
    fontSize: moderateScale(20),
  },
  textStyles: {
    color: Colors.darkGrey,
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(18),
    marginVertical: moderateScale(20),
  },
  customStyles: {
    padding: moderateScale(10),
    backgroundColor: Colors.gray,
    borderRadius: moderateScale(10),
  },
  isDisabledStyles: {
    opacity: 0.5,
  },
});
