import { StyleSheet } from 'react-native';

import { gilroy } from '../../../assets';
import { horizontalScale, moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
  },
  heading: {
    textAlign: 'center',
    fontFamily: gilroy.SemiBold,
    fontSize: moderateScale(20),
  },
});
