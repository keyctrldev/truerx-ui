import { StyleSheet } from 'react-native';

import { fonts } from '../../../assets';
import { moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: moderateScale(20),
  },
  headingText: {
    margin: moderateScale(30),
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(20),
  },
});
