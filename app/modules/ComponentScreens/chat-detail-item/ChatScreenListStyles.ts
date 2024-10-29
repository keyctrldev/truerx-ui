import { StyleSheet } from 'react-native';

import { fonts } from '../../../assets';
import { horizontalScale, moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
  },
  heading: {
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(20),
  },
});
