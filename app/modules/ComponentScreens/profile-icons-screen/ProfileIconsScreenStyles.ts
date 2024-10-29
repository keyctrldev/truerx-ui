import { StyleSheet } from 'react-native';

import { gilroy } from '../../../assets';
import { moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: moderateScale(20),
  },
  headingText: {
    margin: moderateScale(30),
    fontFamily: gilroy.SemiBold,
    fontSize: moderateScale(20),
  },
});
