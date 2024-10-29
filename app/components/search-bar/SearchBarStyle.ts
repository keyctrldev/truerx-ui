import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(20),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(15),
    color: Colors.black,
  },
});
