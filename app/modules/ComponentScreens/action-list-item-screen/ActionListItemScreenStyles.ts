import { StyleSheet } from 'react-native';

import { gilroy } from '../../../assets';
import { Colors, horizontalScale, moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    backgroundColor: Colors.lightGray,
  },
  heading: {
    textAlign: 'center',
    fontFamily: gilroy.SemiBold,
    padding: moderateScale(10),
    fontSize: moderateScale(20),
  },
  textStyles: {
    color: Colors.darkGrey,
    fontFamily: gilroy.SemiBold,
    fontSize: moderateScale(18),
    marginVertical: moderateScale(20),
  },
  customStyles: {
    padding: moderateScale(12),
    backgroundColor: Colors.gray,
    borderRadius: moderateScale(10),
  },
  isDisabledStyles: {
    opacity: 0.5,
  },
});
