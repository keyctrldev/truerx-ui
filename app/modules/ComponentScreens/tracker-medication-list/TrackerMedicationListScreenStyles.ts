import { StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { fonts } from '../../../assets';
import { horizontalScale, moderateScale, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(20),
    backgroundColor: Colors.lightGray,
  },
  mainInterface: {
    margin: moderateScale(10),
    marginTop: verticalScale(20),
    padding: horizontalScale(15),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
  },
  heading: {
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(25),
  },
});
