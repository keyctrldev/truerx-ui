import { StyleSheet } from 'react-native';
import { fonts } from '../../../assets';
import { Colors, horizontalScale, moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: horizontalScale(10),
  },
  text: {
    textAlign: 'center',
    margin: moderateScale(20),
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(20),
  },
});
