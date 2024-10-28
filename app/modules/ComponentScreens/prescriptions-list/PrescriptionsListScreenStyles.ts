import { StyleSheet } from 'react-native';

import { gilroy } from '../../../assets';
import { Colors, moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  mainInterface: {
    margin: moderateScale(20),
  },
  heading: {
    fontFamily: gilroy.SemiBold,
    fontSize: moderateScale(22),
  },
});
