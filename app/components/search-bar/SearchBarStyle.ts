import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(6),
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(14),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(16),
    color: Colors.black,
  },
});
