import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootIconViewStyle: {
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  imageViewStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
    borderRadius: moderateScale(12.5),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  labelStyle: {
    fontSize: moderateScale(15),
  },
});
